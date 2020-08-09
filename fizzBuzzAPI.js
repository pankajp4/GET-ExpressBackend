// import all library/packages required for this module/file
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

// create express app
const app = express();

// set port number for the app
const port = 4000;

// use cors (cross-origin resource sharing) middleware
app.use(cors());

// configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));

// setting 'application/json' as HTTP request body types
app.use(bodyParser.json());

// POST endpoint for fizzBuzz API
app.post("/fizzBuzz", (req, res) => {
	// this variable will be be used to keep fizzBuzz output
	let responseToSend = [];

	// get payload data send by client
	const payload = req.body;
	console.log("Request Body : ", payload);

	// output the fizzBuzz to the console for debugging
	console.log("fizzBuzz Output:");
	console.log("index: value");
	for (let i = 1; i <= payload.count; i++) {
		let fizzBuzz = "";
		if (!(i % 3)) fizzBuzz += "Fizz";
		if (!(i % 5)) fizzBuzz += "Buzz";
		console.log(`${i} : ${fizzBuzz || i}`);
		responseToSend.push(fizzBuzz || i);
	}

	// send response to clients
	res.json(responseToSend);
});

// start client(s) which will listen requests on specified port number 
app.listen(port, () => console.log(`GET-ExpressBackend app is listening on port: "${port}"`));
