const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");

const Server = require("../models/Server");

// @route   GET /api/servers
// @desc    Get all servers
// @access  Public
router.get("/", (req, res) => {
    Server.find().sort({ date: -1 })
        .then(server => {
            res.status(200).json(server);
        })
        .catch(err => {
            res.status(400).json({
                msg: "Something went wrong, please try again.",
                err: err
            });
            console.log(err);
        })
});

// @route   POST /api/servers/new
// @desc    Add a new server
// @access  Private
router.post("/new", auth, (req, res) => {
    const { name, desc, platform, address } = req.body

    // Simple validation
    if (!title || !address) {
        return res.status(400).json({ msg: "Please enter all fields." });
    } else {

        Server.findOne({ name })
            .then(server => {
                if (server) {
                    return res.status(400).json({ msg: "That server name is already used by another server." });
                } else {

                    const newServer = new Server({
                        name,
                        desc,
                        platform,
                        address
                    });

                    newServer.save()
                        .then(server => {
                            res.status(200).json({
                                msg: "Added new server successfully"
                            })
                        })
                        .catch(err => {
                            res.status(400).json({
                                msg: "Something went wrong, please try again.",
                                err: err
                            });
                            console.log(err);
                        });

                }
            })
    }
});

// @Route   DELETE /api/servers/id/delete
// @Desc    Delete an item
// @Access  Public => Private
router.delete("/:id/delete", auth, (req, res) => {
    Server.findById(req.params.id)
        .then(server => server.remove()
            .then(() => res.status(200).json({ msg: "Success" }))
        )
        .catch(err => res.status(400).json({
            msg: "Someting went wrong, please try again.", err
        }));
});

module.exports = router;