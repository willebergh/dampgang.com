const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ServerSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    desc: {
        type: String
    },
    platform: {
        type: String
    },
    address: {
        type: String,
        required: true,
        unique: true
    }
});

module.exports = Server = mongoose.model("server", ServerSchema);
