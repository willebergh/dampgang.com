const express = require("express");
const cors = require("cors");
const app = express();


// Connect to MongoDB
const MongoDB = require("./database/MongoDB");
const mongo = new MongoDB();
mongo.load() ? mongo.connect(process.env.DB_URI) : console.log("[MongoDB]", "Failed to load.")

app.use(express.json())
app.use(cors({
    origin: "http://localhost:3001",
    methods: "GET, PUT, POST, DELETE, UPDATE, OPTIONS",
    preflightContinue: false,
    optionsSuccessStatus: 201,
    credentials: true,
    allowedHeaders: "X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept"
}));


// Routes
app.use("/api", require("./api"));



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("[Express]", `Server started on port ${PORT}.`))