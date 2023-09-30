require("dotenv").config();
const express = require("express");
const cors = require("cors");

const connectToDB = require("./config/db.js");
const app = express();

// Express middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// init connect To DB
connectToDB();

const userRouters = require("./routes/userRoutes.js");

app.use("/", userRouters);

module.exports = app;
