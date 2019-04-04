
// //This is the welcome prompts and capture of username
// var name = prompt("Welome, trainer! What is your name?");
// console.log("Welcome, " + name + "!");
// var playNow = confirm("Are you ready to test your Pokemon knowladge, " + name + "?");
// document.write("Good luck, " + name + "!");

// List of values
var pokemonList = ["Bellossom", "Bellsprout", "Bulbasaur", "Charizard", "Chikorita", "Cyndaquil", "Exeggcute", "Hypno", "Magmar", "Mewtwo", "Onix", "Pikachu"];

// Select random value - math.random selects number between 0-1
var selection = pokemonList[Math.floor(Math.random() * pokemonList.length)];
var lowerSelection = selection.toLowerCase();
console.log(selection);
console.log(lowerSelection);

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


//Declare input field variable 
var inputField = [];
for (var i = 0; i < selection.length; i++) {
    inputField[i] = ("_ ");
}
console.log(inputField.join(''));
document.write(inputField.join(''));

// This function is run whenever the user presses a key and Determines which key was pressed..

document.onkeyup = function (event) {

    var userGuess = event.key;
    guessedLetters.push(userGuess.toLowerCase());


    if (maxGuesses === 0) {
        alert("GAME OVER")
    }

    //checks if input is part of the word (lowercase)
    if (lowerSelection.includes(userGuess.toLowerCase())) {
        guessedCorrectly.push(userGuess.toLowerCase());
        console.log("Guessed letter: " + guessedCorrectly);
        console.log(maxGuesses);
        revealLetter(userGuess);

    } else {
        guessedWrong.push(userGuess.toLowerCase());
        console.log("Wrong letters: " + guessedWrong);
        maxGuesses--;
        console.log(maxGuesses);

    }
    document.querySelector("#GuessesRemaining").innerHTML = maxGuesses;
}

function revealLetter(userGuess) {
    lowerSelection.indexOf(userGuess);
    console.log(selection.indexOf(userGuess));
    inputField[selection.indexOf(userGuess)] = ("");

}



function reset() {
    maxGuesses = 7;
};





