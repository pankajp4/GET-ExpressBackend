# Nodejs Expressjs API Project For FizzBuzz With Single File & Structured Implementation
[![Author](http://img.shields.io/badge/author-@pankajp4-blue.svg)](https://www.linkedin.com/in/pankajpandeyp4/)

A ready-to-use boilerplate for FizzBuzz REST API with Node.js, Express


## About FizzBuzz from Wiki

FizzBuzz is a group word game for children to teach them about division. Players take turns to
count incrementally, replacing any number divisible by three with the word "Fizz", and any number
divisible by five with the word "Buzz".

Players generally sit in a circle. The player designated to go first says the number "1", and the
players then count upwards in turn. However, any number divisible by three is replaced by the word
Fizz and any number divisible by five by the word Buzz. Numbers divisible by 15 become FizzBuzz. A
player who hesitates or makes a mistake is eliminated from the game.

For example, a typical round of FizzBuzz would start as follows:

1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz, 16, 17, Fizz, 19, Buzz,
Fizz, 22, 23, Fizz, Buzz, 26, Fizz, 28, 29, FizzBuzz, 31, 32, Fizz, 34, Buzz, Fizz, ...


## Getting started

This is a basic API skeleton written in NodeJs-Express framework.

This project will run on **NodeJs** using **Express** as framework. I had tried to maintain the code
structure easy to understand & maintain. There is another single file implementation as well. Project
is open for suggestions & bugs can be reports as well.


## Features

-   Basic Authentication (JWT based - not checking anything but valid signed JWT token is required
    to call APIs)
-   JWT Tokens, make requests with a token with `Authorization` header with value `Bearer yourToken`.
-   Pre-defined response helper with proper status, message & http response codes.
-   Included CORS.
-    **FizzBuzz** API with **GET** & **POST** operations.
-   API params validations for both i.e. GET & POST calls.
-   Included API collection for Postman.
-   Light-weight & well documented project.
-   Test cases with [Mocha](https://mochajs.org/) and [Chai](https://www.chaijs.com/).
-   Linting with [Eslint](https://eslint.org/).

## Software Requirements

-   Node.js **10+**
-   Express **4+**

## How to install

### Using GIT (recommended)

1.  Clone the project from github. You can change "fizzBuzzAPIProject" to any other name.

```bash
git clone https://github.com/pankajp4/GET-ExpressBackend.git ./fizzBuzzAPIProject
```

### Using manual download from GIT as ZIP

1.  Download repo ZIP
2.  Uncompress to your desired directory


### Install NPM dependencies after installing (same for GIT or manual download)

```bash
cd fizzBuzzAPIProject
npm install
```
## Project Structure
```sh
├── fizzBuzzAPI.js (single file implementation with console log)
├── .env
├── .gitignore
├── .eslintrc.json
├── app.js
├── package.json
├── bin
│   └── www
├── controllers
│   ├── FizzBuzzController.js
├── postman-collection
│   ├── GET-ExpressBackend.postman_collection.json
├── models
├── routes
│   ├── api.js
│   ├── fizzBuzz.js
│   └── index.js
├── middlewares
│   ├── jwt.js
├── helpers
│   ├── apiResponseHelper.js
│   ├── fizzbuzzHelper.js
├── test
│   ├── testConfig.js
│   ├── fizzBuzz.spec.js
└── public
```


## How to Run

### Running Structured API server locally on PORT - 3001

```bash
npm run dev
```

If everything goes well then you will see below output for `npm run dev` command

```bash
> GET-ExpressBackend@1.0.0 dev /Users/techjini/ProjectData/GET-ExpressBackend
> nodemon ./bin/www

[nodemon] 2.0.4
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,json
[nodemon] starting `node ./bin/www`

Press CTRL + C to stop the process.
```

### Running Single File API server locally on PORT - 4000

```bash
node fizzBuzzAPI.js
```

If everything goes well then you will see below output for `node fizzBuzzAPI.js` command

```bash
GET-ExpressBackend app is listening on port: "4000"

Press CTRL + C to stop the process.
```


## Tests

### Covered Test Cases

```sh
├── Covered API test cases:
│   └── /POST FizzBuzz - Authorization
│   └── /POST FizzBuzz - Success
│   └── /POST FizzBuzz - Validations
│   └── /GET FizzBuzz - Authorization
│   └── /GET FizzBuzz - Success
│   └── /GET FizzBuzz - Validations
|
├── Covered fizzbuzzGenerator test cases:
│   ├── not a multiple of 3 & 5
│   ├── multiple of 3
│   ├── multiple of 5
│   ├── multiple of both 3 & 5
│   ├── non-numerical input
│   ├── zero count
```

### Running Test Cases

```bash
npm test
```

If everything goes well then you will see below output for `npm test` command

```bash
> GET-ExpressBackend@1.0.0 test /Users/techjini/ProjectData/GET-ExpressBackend
> nyc _mocha --timeout 10000 --exit --report lcovonly -- -R spec

  GET-ExpressBackend Automation Test Result:
    FizzBuzz /POST API Tests:
      ✓ It should send Authorization error for fizzBuzz POST call
      ✓ It should generate FizzBuzz successfully for POST call.
      ✓ It should return validation errors for POST call.
    FizzBuzz /GET API Tests:
      ✓ It should send Authorization error for fizzBuzz GET call
      ✓ It should generate FizzBuzz successfully for GET call.
      ✓ It should return validation errors for GET call.
    fizzbuzzGenerator Helper Function Tests:
      ✓ It should return the number itself when not a multiple of 3 & 5
      ✓ It should return Fizz for multiples of 3
      ✓ It should return Buzz for multiples of 5
      ✓ It should return FizzBuzz for numbers which are multiple of both 3 & 5
      ✓ It should refuse non-numerical input
      ✓ It should refuse zero count


  12 passing (85ms)

--------------------------------|---------|----------|---------|---------|-------------------------
File                            | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s       
--------------------------------|---------|----------|---------|---------|-------------------------
All files                       |   84.85 |    81.25 |   41.67 |   84.21 |                         
 GET-ExpressBackend             |      84 |       25 |       0 |      84 |                         
  app.js                        |      84 |       25 |       0 |      84 | 17,41,46-47             
 GET-ExpressBackend/controllers |   90.91 |      100 |     100 |   90.91 |                         
  FizzBuzzController.js         |   90.91 |      100 |     100 |   90.91 | 41,81                   
 GET-ExpressBackend/helpers     |   74.19 |      100 |   42.86 |   70.37 |                         
  apiResponseHelper.js          |   55.56 |      100 |   33.33 |   55.56 | 10-14,44-48,60-64,94-98 
  fizzbuzzHelper.js             |     100 |      100 |     100 |     100 |                         
 GET-ExpressBackend/middlewares |     100 |      100 |     100 |     100 |                         
  jwt.js                        |     100 |      100 |     100 |     100 |                         
 GET-ExpressBackend/routes      |   94.12 |      100 |       0 |   94.12 |                         
  api.js                        |     100 |      100 |     100 |     100 |                         
  fizzBuzz.js                   |     100 |      100 |     100 |     100 |                         
  index.js                      |      80 |      100 |       0 |      80 | 9                       
--------------------------------|---------|----------|---------|---------|-------------------------
```

## ESLint

### Running Eslint

```bash
npm run lint
```

You can set custom rules for eslint in `.eslintrc.json` file, Added at project root.

## Bugs or improvements

Every project needs improvements, Feel free to report any bugs or improvements.
