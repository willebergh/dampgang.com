const express = require("express");
const app = express();



// Connect to MongoDB
const MongoDB = require("./database/MongoDB");
const mongo = new MongoDB();
mongo.load() ? mongo.connect(process.env.DB_URI) : console.log("[MongoDB]", "Failed to load.")



// Routes
app.use("/api", require("./api"));



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("[Express]", `Server started on port ${PORT}.`))