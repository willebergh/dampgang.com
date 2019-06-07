const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
require('dotenv').config()
const jwt = require("jsonwebtoken");
const auth = require("../middleware/auth");

// User modal
const User = require("../models/user");


// @route   GET api/user/me
// @desc    Get user data
// @access  Private
router.get("/me", auth, (req, res) => {
    User.findById(req.user.id)
        .select("-password")
        .then(user => res.json(user));
})

// @route   POST api/user/register
// @desc    Register new user
// @access  Public
router.post("/register", (req, res) => {
    const { username, email, password, repeatPassword } = req.body;

    // Simple validation
    if (!username || !email || !password || !repeatPassword) {
        return res.status(400).json({ msg: "Please enter all fields" });
    }

    if (password !== repeatPassword) return res.status(400).json({msg: "Passwords don't match"})

    // Check for existing user
    User.findOne({ email })
        .then(user => {
            if (user) return res.status(400).json({ msg: "User already exists" });

            const newUser = new User({
                username,
                email,
                password
            });

            // Create salt & hash
            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newUser.password, salt, (err, hash) => {
                    if (err) throw err;
                    newUser.password = hash;
                    newUser.save()
                        .then(user => {
                            jwt.sign(
                                { id: user.id },
                                process.env.JWT_SECRET,
                                { expiresIn: 3600 },
                                (err, token) => {
                                    if (err) throw err;
                                    res.json({ username, token });
                                }
                            )
                        });
                })
            })
        })
});

module.exports = router