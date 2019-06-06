const mongoose = require("mongoose");
require("dotenv").config();

module.exports = class MongoDB {
    constructor() {

    }

    load() {
        return true;
    }

    connect(uri) {
        mongoose.connect(uri, {
            useNewUrlParser: true,
            useCreateIndex: true
        })
            .then(() => console.log("[MongoDB]", "MongoDB Connected."))
            .catch(err => console.log(err));
    }
}