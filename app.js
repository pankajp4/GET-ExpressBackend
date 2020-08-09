// import all library/packages required for this module/file
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
require("dotenv").config();
const indexRouter = require("./routes/index");
const apiRouter = require("./routes/api");
const apiResponseHandler = require("./helpers/apiResponseHelper");
const cors = require("cors");

// create express app
const app = express();

// skip logs if environment is set to "test"
if(process.env.NODE_ENV !== "test") {
	app.use(logger("dev"));
}

// setting 'application/json' as HTTP request body types
app.use(express.json());

// configuring body parser middleware
app.use(express.urlencoded({ extended: false }));

// cookie parser middleware - not using it
app.use(cookieParser());

// middleware to serve files from specified directory
app.use(express.static(path.join(__dirname, "public"))); // not using it

// use cors (cross-origin resource sharing) middleware to allow cross-origin requests
app.use(cors());

// supported route prefixes
app.use("/", indexRouter);
app.use("/api/", apiRouter);

// throw 404 if URL not found
app.all("*", function(req, res) {
	return apiResponseHandler.notFound(res, "Resource/Page not found");
});

// middleware to handle JWT custom error handling
app.use((err, req, res) => {
	if(err.name == "UnauthorizedError"){
		return apiResponseHandler.unauthorized(res, err.message);
	}
});

module.exports = app;