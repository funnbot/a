class LetterLoader {
    constructor() {
        this.letter = null;
        this.letter_uppercase = null;
        this.letter_loaded = false;
        this.letter_uppercase_loaded = false;
    }

    LoadLetter(letter) {
        if (letter === undefined) throw new Error("NO_LETTER_PROVIDED");
        if (typeof letter !== "string") throw new Error("LETTER_MUST_BE_STRING");
        this.letter = letter;
        this.letter_loaded = true;
    }

    LoadLetterUpperCase(letter_uppercase) {
        if (letter_uppercase === undefined) throw new Error("NO_LETTER_PROVIDED");
        if (typeof letter_uppercase !== "string") throw new Error("LETTER_MUST_BE_STRING");
        this.letter_uppercase = letter_uppercase;
        this.letter_uppercase_loaded = true;
    }

    GetLetter(uppercase = false) {
        if (uppercase) {
            // Get uppercase letter
            if (!this.letter_uppercase_loaded) throw new Error("LETTER_UPPERCASE_NOT_LOADED");
            return this.letter_uppercase;
        } else {
            // get lowercase letter
            if (!this.letter_loaded) throw new Error("LETTER_NOT_LOADED");
            return this.letter;
        }
    }
}

module.exports = LetterLoader;