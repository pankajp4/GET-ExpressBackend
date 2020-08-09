/**
 * Returns array of number or "Fizz" if number is divisible by three, or "Buzz"
 * if number is divisible by five or "FizzBuzz" is divisible by both
 * 
 * @param {Number} length
 * 
 * @returns {Array<Number|String>}
 */
exports.fizzbuzzGenerator = function (length) {
	// basic validation on function param
	if (!length) return [];

	// this variable will be be used to keep fizzBuzz output
	let responseToSend = [];

	// output the fizzBuzz to the console for debugging
	for (let i = 1; i <= length; i++) {
		let fizzBuzz = "";

		// check if current number is multiple of 3 or not
		if (!(i % 3)) fizzBuzz += "Fizz";

		// check if current number is multiple of 5 or not
		if (!(i % 5)) fizzBuzz += "Buzz";

		// if number is not a multiple of 3 & 5 then return number
		responseToSend.push(fizzBuzz || i);
	}

	// response to caller
	return responseToSend;
};