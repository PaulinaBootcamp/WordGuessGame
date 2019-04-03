var words = ["aaple", "banana", "celine", "babboon", "pex", "hello",
    "this is hard", "what is going on"];
words.sort();
userGuesses = []
document.onkeyup = function (event) {
    console.log(event.key);
    if (event.key === "a" || event.key === "b" || event.key === "c") {
        //find appropriate words
        for (var i = 0; i < words.length; i++) {
            if (event.key === words[i].charAt(0)) {
                console.log(words[i]);
                userGuesses.push(event.key);
                console.log(userGuesses);

            }
        }
    }
}