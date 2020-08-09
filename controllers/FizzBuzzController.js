// import all library/packages required for this module/file
const { check, body, validationResult } = require("express-validator");
const apiResponseHandler = require("../helpers/apiResponseHelper");
const fizzbuzzHelper = require("../helpers/fizzbuzzHelper");
const auth = require("../middlewares/jwt");

/**
 * FizzBuzz GET API function.
 * 
 * @param {Number} count
 * 
 * @returns {Object}
 */
exports.fizzBuzzGet = [
	auth,
	check("count", "count should not be empty.").not().isEmpty(),
	check("count", "count should be an integer and greater than 0.").isInt({ gt: 0 }),
	check("count", "count must be an integer.").isNumeric(),
	check("count", "count must have length of 1 to 3 digit.").isLength({ min: 1, max: 3 }).trim(),
	(req, res) => {
		try {
			// get all validation errors as array
			const vResultObj = validationResult(req);

			// check if validation result obj have any errors or not
			if (!vResultObj.isEmpty()) {
				return apiResponseHandler.validationErrorWithData(res, "Validation FAILED. Please check and fix payload data.", vResultObj.array());
			} else {
				// everything is checked - code here
				// get params from URL route send by client
				const urlParams = req.params;

				// call fizzbuzzGenerator from helper and save output
				const responseToSend = fizzbuzzHelper.fizzbuzzGenerator(urlParams.count);

				// everything is good send response withsuccess
				return apiResponseHandler.successWithData(res, "FizzBuzz generated successfully.", responseToSend);
			}
		} catch (err) {
			// send error in json response with status 500. 
			return apiResponseHandler.error(res, err);
		}
	}
];

/**
 * FizzBuzz POST API function.
 * 
 * @param {Number} count
 * 
 * @returns {Object}
 */
exports.fizzBuzzPost = [
	auth,
	check("count", "count should not be empty.").not().isEmpty(),
	check("count", "count should be an integer and greater than 0.").isInt({ gt: 0 }),
	check("count", "count must be an integer.").isNumeric(),
	check("count", "count must have length of 1 to 3 digit.").isLength({ min: 1, max: 3 }).trim(),
	body("*").escape(),
	(req, res) => {
		try {
			// get all validation errors as array
			const vResultObj = validationResult(req);

			// check if validation result obj have any errors or not
			if (!vResultObj.isEmpty()) {
				return apiResponseHandler.validationErrorWithData(res, "Validation FAILED. Please check and fix payload data.", vResultObj.array());
			} else {
				// everything is checked - code here
				// get payload data send by client
				const payload = req.body;

				// call fizzbuzzGenerator from helper and save output
				const responseToSend = fizzbuzzHelper.fizzbuzzGenerator(payload.count);

				// everything is good send response withsuccess
				return apiResponseHandler.successWithData(res, "FizzBuzz generated successfully.", responseToSend);
			}
		} catch (err) {
			// send error in json response with status 500. 
			return apiResponseHandler.error(res, err);
		}
	}
];
