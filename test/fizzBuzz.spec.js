// import all library/packages required for this module/file
const { chai, server, expect } = require("./testConfig");
const fizzbuzzHelper = require("../helpers/fizzbuzzHelper");

/**
 * Test cases to test all the fizzBuzz APIs
 * Covered API test cases:
 * (1) /POST FizzBuzz - Authorization
 * (2) /POST FizzBuzz - Success
 * (3) /POST FizzBuzz - Validations
 * (4) /GET FizzBuzz - Authorization
 * (5) /GET FizzBuzz - Success
 * (6) /GET FizzBuzz - Validations
 * 
 * Covered fizzbuzzGenerator test cases:
 * (1) not a multiple of 3 & 5
 * (2) multiple of 3
 * (3) multiple of 5
 * (4) multiple of both 3 & 5
 * (5) non-numerical input
 * (6) zero count
 */

describe("GET-ExpressBackend Automation Test Result:", () => {
	/**
	 * ************************ API Test Cases - Starts Here ************************
	 */
	// prepare JWT data for testing
	const jwtTestAuthorizationData = {
		token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJGb3ItQXV0b21hdGVkLVRlc3QiLCJuYW1lIjoiUGFua2FqIFBhbmRleSIsImlhdCI6MTUxNjIzOTAyMn0.UM1pDrlm4LfYaEA5VeJodsM6Vb6Wkt-bafTHHHNXRrw"
	};

	// prepare success data for testing
	const successTestData = {
		count: 15
	};

	// prepare failure data for testing
	const failureTestData = {
		count: "15a" // other validation failure cases 1234, true, false, null
	};

	// prepare failure data for testing
	const failureTestData2 = {
		count: 1234 // other validation failure cases "15a", true, false, null
	};

	// describe test cases for FizzBuzz /POST API
	describe("FizzBuzz /POST API Tests:", () => {
		it("It should send Authorization error for fizzBuzz POST call", (done) => {
			chai.request(server)
				.post("/api/fizzBuzz")
				.send()
				.set("Authorization", jwtTestAuthorizationData.token)
				.end((err, res) => {
					res.should.have.status(400);
					done();
				});
		});

		it("It should generate FizzBuzz successfully for POST call.", (done) => {
			chai.request(server)
				.post("/api/fizzBuzz")
				.send(successTestData)
				.set("Authorization", jwtTestAuthorizationData.token)
				.end((err, res) => {
					res.should.have.status(200);
					res.body.should.have.property("status").eql(true);
					res.body.should.have.property("message").eql("FizzBuzz generated successfully.");
					done();
				});
		});

		it("It should return validation errors for POST call.", (done) => {
			chai.request(server)
				.post("/api/fizzBuzz")
				.send(failureTestData)
				.set("Authorization", jwtTestAuthorizationData.token)
				.end((err, res) => {
					res.should.have.status(400);
					res.body.should.have.property("status").eql(false);
					res.body.should.have.property("message").eql("Validation FAILED. Please check and fix payload data.");
					done();
				});
		});
	});

	// describe test cases for FizzBuzz /GET API
	describe("FizzBuzz /GET API Tests:", () => {
		it("It should send Authorization error for fizzBuzz GET call", (done) => {
			chai.request(server)
				.get("/api/fizzBuzz")
				.send()
				.set("Authorization", jwtTestAuthorizationData.token)
				.end((err, res) => {
					res.should.have.status(400);
					done();
				});
		});

		it("It should generate FizzBuzz successfully for GET call.", (done) => {
			chai.request(server)
				.get("/api/fizzBuzz/" + successTestData.count)
				.set("Authorization", jwtTestAuthorizationData.token)
				.end((err, res) => {
					res.should.have.status(200);
					res.body.should.have.property("status").eql(true);
					res.body.should.have.property("message").eql("FizzBuzz generated successfully.");
					done();
				});
		});

		it("It should return validation errors for GET call.", (done) => {
			chai.request(server)
				.get("/api/fizzBuzz/" + failureTestData2.count)
				.set("Authorization", jwtTestAuthorizationData.token)
				.end((err, res) => {
					res.should.have.status(400);
					res.body.should.have.property("status").eql(false);
					res.body.should.have.property("message").eql("Validation FAILED. Please check and fix payload data.");
					done();
				});
		});
	});

	/**
	 * ************************ API Test Cases - Ends Here ************************
	 */

	/**
	 * ======================= fizzbuzzGenerator Test Cases - Starts Here =========
	 */

	// describe test cases for fizzbuzzGenerator helper function
	describe("fizzbuzzGenerator Helper Function Tests:", () => {
		it("It should return the number itself when not a multiple of 3 & 5", () => {
			const count1 = 8;
			expect(fizzbuzzHelper.fizzbuzzGenerator(count1)[count1 - 1]).to.equal(8);

			const count2 = 19;
			expect(fizzbuzzHelper.fizzbuzzGenerator(count2)[count2 - 1]).to.equal(19);
		});

		it("It should return Fizz for multiples of 3", () => {
			const count1 = 12;
			expect(fizzbuzzHelper.fizzbuzzGenerator(count1)[count1 - 1]).to.equal("Fizz");

			const count2 = 24;
			expect(fizzbuzzHelper.fizzbuzzGenerator(count2)[count2 - 1]).to.equal("Fizz");
		});

		it("It should return Buzz for multiples of 5", () => {
			const count1 = 25;
			expect(fizzbuzzHelper.fizzbuzzGenerator(count1)[count1 - 1]).to.equal("Buzz");

			const count2 = 40;
			expect(fizzbuzzHelper.fizzbuzzGenerator(count2)[count2 - 1]).to.equal("Buzz");
		});

		it("It should return FizzBuzz for numbers which are multiple of both 3 & 5", () => {
			const count1 = 30;
			expect(fizzbuzzHelper.fizzbuzzGenerator(count1)[count1 - 1]).to.equal("FizzBuzz");

			const count2 = 45;
			expect(fizzbuzzHelper.fizzbuzzGenerator(count2)[count2 - 1]).to.equal("FizzBuzz");
		});

		it("It should refuse non-numerical input", () => {
			const count1 = undefined;
			expect(fizzbuzzHelper.fizzbuzzGenerator(count1)).to.have.lengthOf(0);

			const count2 = null;
			expect(fizzbuzzHelper.fizzbuzzGenerator(count2)).to.have.lengthOf(0);
		});

		it("It should refuse zero count", () => {
			const count1 = 0;
			expect(fizzbuzzHelper.fizzbuzzGenerator(count1)).to.have.lengthOf(0);
		});
	});

	/**
	 * ======================= fizzbuzzGenerator Test Cases - Ends Here =========
	 */
});