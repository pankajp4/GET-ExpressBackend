// import all library/packages required for this module/file
const express = require("express");
const fizzBuzzRouter = require("./fizzBuzz");

// create express app
const app = express();

// specify API endpoints here
app.use("/fizzBuzz/", fizzBuzzRouter);

module.exports = app;