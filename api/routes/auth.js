const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
require('dotenv').config()
const jwt = require("jsonwebtoken");

// User modal
const User = require("../models/user");

// @route   POST api/auth/login
// @desc    Auth user
// @access  Public
router.post("/", (req, res) => {
    () => console.log("Someone is trying to login!");
    const { username, password } = req.body;

    if (!username || !password) return res.status(400).json({ msg: "No empty fields" });

    User.findOne({ username })
        .then(user => {
            if (!user) return res.status(400).json({ msg: "User not found" });

            bcrypt.compare(password, user.password)
                .then(isMatch => {
                    if (!isMatch) return res.status(401).json({ msg: "Wrong username or password" });

                    jwt.sign(
                        { id: user._id },
                        process.env.JWT_SECRET,
                        { expiresIn: 3600 },
                        (err, token) => {
                            if (err) throw err;
                            res.json({ username, token });
                        }
                    )
                })
        })
})



module.exports = router