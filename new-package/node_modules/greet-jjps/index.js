const upperCase = require("upper-case").upperCase;

function greet(name) {
    console.log(upperCase(`Hello ${name}, welcome to Code4Life`));
}

module.exports = greet;