// import all library/packages required for this module/file
const express = require("express");

// get express router object
const router = express.Router();

// get home page - just a route
router.get("/", function(req, res) {
	res.render("index", { title: "GET-ExpressBackend" });
});

module.exports = router;
