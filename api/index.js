const express = require("express");
const router = express.Router();

router.use("/auth", require("./routes/auth"));
router.use("/servers", require("./routes/servers"));
router.use("/user", require("./routes/user"));

module.exports = router