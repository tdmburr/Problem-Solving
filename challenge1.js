// Given an array of strings, return only the strings that have exactly 4 characters.

// Create an array of strings and return only strings with exactly 4 letters
// return strings that are exactly 4 letters using an if/for statement
// Will I need to use return? Or just print the code?
// Research if necessary
// if it is exactly 4 characters print to the console

var words = ["Coat", "Shoe", "Horse", "Hat", "Camp"] 

for (var i = 0; i < words.length; i++) {
    if (words[i].length === 4) {
        console.log(words[i])
    }   
}