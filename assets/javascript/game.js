
//This is the welcome prompts and capture of username
name = prompt("Welome, trainer! What is your name?");
console.log("Welcome, " + name + "!");
playNow = confirm("Are you ready to test your Pokemon knowladge, " + name + "?");
document.getElementById("welcomeMsg").innerHTML = ("Welcome, " + name + "!");

// get first  selection image - change the generic starting image
//   const image = document.getElementById("hint-image");
//   image.src = "assets/images/" + selection + ".jpg";




// List of values
pokemonList = ["Bellossom", "Bellsprout", "Bulbasaur", "Charizard", "Chikorita", "Cyndaquil", "Exeggcute", "Hypno", "Magmar", "Mewtwo", "Onix", "Pikachu"];




// Select random value - math.random selects number between 0-1
randomSelection = pokemonList[Math.floor(Math.random() * pokemonList.length)];
selection = randomSelection;
lowerSelection = selection.toLowerCase();
console.log(selection);
console.log(lowerSelection);






//Find out the legth of the word
remainingLetters = selection.length;
console.log(remainingLetters)

//Set maximum guesses available
maxGuesses = 7;

// Store letters guessed by the user
guessedLetters = [];

//track wins and losses
wins = 0;
losses = 0;

guessedWrong = [];
guessedCorrectly = [];


//Declare input field iable 
inputField = [];
for (i = 0; i < selection.length; i++) {
    inputField[i] = ("_ ");
}
console.log(inputField.join(''));


// to HTML elements
userSelection = document.getElementById("userSelection");
userSelection.textContent = inputField.join('');

document.getElementById("wins").innerHTML = ("Wins: " + wins);
document.getElementById("losses").innerHTML = ("Losses: " + losses);
document.getElementById("guessesRemaining").innerHTML = ("Guesses remaining: " + maxGuesses);
document.getElementById("guessedWrong").innerHTML = ("Letters not found: " + guessedWrong);


//generate alphabet

alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
// console.log(alphabet);

// This function is run whenever the user presses a key and Determines which key was pressed..

document.getElementById("newGame").onclick = function () {
    // get first  selection image - change the generic starting image

    wins = 0;
    losses = 0;
    document.getElementById("wins").innerHTML = ("Wins: " + wins);
    document.getElementById("losses").innerHTML = ("Losses: " + losses);

    const image = document.getElementById("hint-image");
    image.src = "assets/images/" + selection + ".jpg";


    document.onkeyup = function (event) {

        userGuess = event.key;


        if (alphabet.includes(userGuess.toLowerCase())) {

            if (guessedLetters.includes(userGuess.toLowerCase())) {
                alert("You have already tried letter -" + userGuess + "-! Please try a different letter.")
            }
            else {
                // record all user guesses 
                guessedLetters.push(userGuess.toLowerCase());




                //checks if input is part of the word (lowercase)
                if (lowerSelection.includes(userGuess.toLowerCase())) {
                    guessedCorrectly.push(userGuess.toLowerCase());
                    console.log("Guessed letter: " + guessedCorrectly);
                    console.log(maxGuesses);


                    //list all positions where letter is found
                    allPositions = [];
                    for (i = 0; i < lowerSelection.length; i++) {
                        if (lowerSelection[i] === userGuess.toLowerCase()) allPositions.push(i);
                        // console.log(allPositions)
                    }


                    showLetter(userGuess, allPositions);

                    setTimeout(function () {
                        checkIfWinner(userSelection, randomSelection);
                    }, 0);
                    ;


                } else {
                    guessedWrong.push(userGuess.toLowerCase());
                    console.log("Wrong letters: " + guessedWrong);
                    document.getElementById("guessedWrong").innerHTML = ("Letters not found: " + guessedWrong);
                    maxGuesses--;
                    console.log(maxGuesses);
                    // check if there are any guesses remaining, if zero GAME OVER
                    document.getElementById("guessesRemaining").innerHTML = ("Guesses remainig: " + maxGuesses);
                    setTimeout(function () {
                        checkIfLoser(maxGuesses);
                    }, 0);
                    ;

                }
                // document.querySelector("#GuessesRemaining").innerHTML = maxGuesses;
            }
            //this is a pop up if input is not letters
        } else { alert("Please input letters only!") }


    }




    function showLetter(userGuess, allPositions) {
        // console.log("Position" + lowerSelection.indexOf(userGuess.toLowerCase()));
        // inputField[lowerSelection.indexOf(userGuess.toLowerCase())] = selection[lowerSelection.indexOf(userGuess.toLowerCase())];
        for (i = 0; i < allPositions.length; i++) {
            idxWhereToPutIt = allPositions[i];

            inputField[idxWhereToPutIt] = selection[idxWhereToPutIt];
        }
        userSelection.textContent = inputField.join('');
    }
    //if all letters revealed, YOU WIN!
    function checkIfWinner(userSelection, randomSelection) {
        if (userSelection.textContent === randomSelection) {
            alert("WINNER, WINNER, CHICKEN DINNER!");
            wins++;
            console.log("WINS " + wins);
            document.getElementById("wins").innerHTML = ("Wins: " + wins);
            document.getElementById("guessesRemaining").innerHTML = ("Guesses remaining: " + maxGuesses);
            reset();
        }
    }
    //if no guesses left, you lose!
    function checkIfLoser(maxGuesses) {
        if (maxGuesses === 0) {
            alert("GAME OVER, PIKACHU IS CRYING :(");
            losses++;
            console.log("LOSSES " + losses);

            document.getElementById("losses").innerHTML = ("Losses: " + losses);
            document.getElementById("guessesRemaining").innerHTML = ("Guesses remaining: " + maxGuesses);
            reset();
        }
    }

    //this reset funstion restores all values except reseting number of wins/losses
    function reset() {
        randomSelection = pokemonList[Math.floor(Math.random() * pokemonList.length)];
        selection = randomSelection;
        lowerSelection = selection.toLowerCase();
        console.log(selection);
        console.log(lowerSelection);

        //Find out the legth of the word
        remainingLetters = selection.length;
        console.log(remainingLetters)

        //Set maximum guesses available
        maxGuesses = 7;

        // Store letters guessed by the user
        guessedLetters = [];

        //track wins and losses
        // wins = 0;
        // losses = 0;

        guessedWrong = [];
        guessedCorrectly = [];


        //Declare input field iable 
        inputField = [];
        for (i = 0; i < selection.length; i++) {
            inputField[i] = ("_ ");
        }
        console.log(inputField.join(''));

        userSelection = document.getElementById("userSelection");
        userSelection.textContent = inputField.join('');
        document.getElementById("guessesRemaining").innerHTML = ("Guesses remaining: " + maxGuesses);
        document.getElementById("guessedWrong").innerHTML = ("Letters not found: " + guessedWrong);
        console.log("NEW " + randomSelection);
        const image = document.getElementById("hint-image");
        image.src = "assets/images/" + selection + ".jpg";
    }
}
