const LetterLoader = require("./src/LetterLoader.js");
const { LETTER, LETTER_UPPERCASE }  = require("./src/Constants.js");

const letterLoader = new LetterLoader();

// Load the letters
letterLoader.LoadLetter(LETTER);
letterLoader.LoadLetterUpperCase(LETTER_UPPERCASE);

module.exports = letterLoader;