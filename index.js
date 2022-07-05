const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const mongoose = require("mongoose");
const cors = require("cors");

// API ROUTES
const userRoutes = require("./routes/user")
const postRoutes = require("./routes/post")

// DOTENV CONFIG
require('dotenv').config();

// ESSENTIAL MIDDLEWARES
app.use(cors());
app.use(express.json());

// DATABASE CONNECTION
const DB = process.env.DATABASE;
mongoose.connect(DB, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log("Database connected.");
}).catch((err) => {
    console.log("Database error");
    console.log(err);
});


// APIS
app.use("/user", userRoutes);
app.use("/post", postRoutes);


app.listen(port, () => {
    console.log("The server is up and running at port 5000");
})