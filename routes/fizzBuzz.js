// import all library/packages required for this module/file
const express = require("express");
const FizzBuzzController = require("../controllers/FizzBuzzController");

// get express router object
const router = express.Router();

// specify fizzBuzz API supported method-routes here
router.get("/", FizzBuzzController.fizzBuzzGet);
router.get("/:count", FizzBuzzController.fizzBuzzGet);
router.post("/", FizzBuzzController.fizzBuzzPost);

module.exports = router;