const a = require("../index.js");

const lower = a.GetLetter();

console.log("Lower Case: " + lower);

const uppercase = true;
const upper = a.GetLetter(uppercase);

console.log("Upper Case: " + upper);