// Pig Latin

// Write a method the takes in a string and returns the pig latin equivalent. 
// Pig Latin takes the first consonant, moves it to the end of the word and places “ay” at the end. 
// If the string starts with a consonant do nothing. “pig” = “igpay”, “banana” = “ananabay”

var toPigLatin = function(str) {
    return str.replace(/(^\w)(.+)/, '$2$1ay');
};

toPigLatin("banana");

//Slightly improved version to use with whole sentences:

var toPigLatinL = function(str){
    return str.replace(/\b(\w)(\w+)\b/g, '$2$1ay');
};

toPigLatinL("this is the one");

//another version

function letters(word) {
    return word.split('')
}

function pigLatinizeWord(word) {
    var chars = letters(word);
    return chars.slice(1).join('') + chars[0] + 'ay';
}

function pigLatinizeSentence(sentence) {
    return sentence.replace(/\w+/g, pigLatinizeWord)
}

pigLatinizeSentence('This, is a test!');