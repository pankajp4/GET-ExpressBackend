/**
 * Used to return HTTP response for success
 * 
 * @param {Object} res
 * @param {String} msg
 * 
 * @returns {Object}
 */
exports.success = function (res, msg) {
	const data = {
		status: true,
		message: msg
	};
	return res.status(200).json(data);
};

/**
 * Used to return HTTP response for success with data
 * 
 * @param {Object} res
 * @param {String} msg
 * @param {Any} data
 * 
 * @returns {Object}
 */
exports.successWithData = function (res, msg, data) {
	const resData = {
		status: true,
		message: msg,
		data: data
	};
	return res.status(200).json(resData);
};

/**
 * Used to return HTTP response for error
 * 
 * @param {Object} res
 * @param {String} msg
 * 
 * @returns {Object}
 */
exports.error = function (res, msg) {
	const data = {
		status: false,
		message: msg,
	};
	return res.status(500).json(data);
};

/**
 * Used to return HTTP response for resource not found
 * 
 * @param {Object} res
 * @param {String} msg
 * 
 * @returns {Object}
 */
exports.notFound = function (res, msg) {
	const data = {
		status: false,
		message: msg,
	};
	return res.status(404).json(data);
};

/**
 * Used to return HTTP response for validation error
 * 
 * @param {Object} res
 * @param {String} msg
 * @param {Any} data
 * 
 * @returns {Object}
 */
exports.validationErrorWithData = function (res, msg, data) {
	const resData = {
		status: false,
		message: msg,
		data: data
	};
	return res.status(400).json(resData);
};

/**
 * Used to return HTTP response for JWT unauthorized
 * 
 * @param {Object} res
 * @param {String} msg
 * 
 * @returns {Object}
 */
exports.unauthorized = function (res, msg) {
	const data = {
		status: false,
		message: msg,
	};
	return res.status(401).json(data);
};