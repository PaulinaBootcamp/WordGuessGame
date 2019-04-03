
// //This is the welcome prompts and capture of username
// var name = prompt("Welome, trainer! What is your name?");
// console.log("Welcome, " + name + "!");
// var playNow = confirm("Are you ready to test your Pokemon knowladge, " + name + "?");
// document.write("Good luck, " + name + "!");

// List of values
var pokemonList = ["Bellossom", "Bellsprout", "Bulbasaur", "Charizard", "Chikorita", "Cyndaquil", "Exeggcute", "Hypno", "Magmar", "Mewtwo", "Onix", "Pikachu"];

// Select random value
var selection = pokemonList[Math.floor(Math.random() * pokemonList.length)];
console.log(selection);

//Find out the legth of the word
var remainingLetters = selection.length;
console.log(remainingLetters)

//Set maximum guesses available
var maxGuesses = 7;

// Store letters guessed by the user
var guessedLetters = [];

//track wins and losses
var wins = 0;
var losses = 0;

var guessedWrong = [];
var guessedCorrectly = [];


//Declare input field variable  - NEED TO REMOVE COMMAS
var inputField = [];
for (var i = 0; i < selection.length; i++) {
    inputField[i] = ("_ ");
}
console.log(inputField.join(''));
document.write(inputField.join(''));


// This function is run whenever the user presses a key and Determines which key was pressed..
document.onkeyup = function (event) {
    var userGuess = event.key;
    guessedLetters.push(userGuess);
    console.log(userGuess);
    console.log(guessedLetters);
    if (selection.includes(userGuess)) {
        guessedCorrectly.push(userGuess);
        console.log("Guessed letter: " + guessedCorrectly)
    }
    else {
        guessedWrong.push(userGuess);
        console.log("Wrong letters: " + guessedWrong);
    };
}






