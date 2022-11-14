// Start with an array of strings. Print only the words that include the letter combination "ing".

// Create an array of strings that will print a letter cominbation including "ing"
//print all words that include "ing" ===> for statement
// if does not include ing do nothing


var words = ["Sitting", "Typing", "Practicing", "Type", "Play"]

for (var i = 0; i < words.length; i++) {
    if (words[i].includes("ing")) {
    console.log(words[i])
    }
}

