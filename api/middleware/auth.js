const jwt = require("jsonwebtoken");
require('dotenv').config()

function auth(req, res, next) {
    const token = req.headers.damp_auth_token;

    if (!token) return res.status(401).json({ msg: "No token, denied" });

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        req.user = decoded;
        next();
    } catch (e) {
        res.status(401).json({ msg: "Token is not valid" });
    }
}

module.exports = auth;