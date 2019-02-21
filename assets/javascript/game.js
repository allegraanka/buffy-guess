console.log("Loaded");

// start a new game, display game board on-click
var gameBoard = document.getElementById("gameBoard");
var startButton = document.getElementById("startButton");

startButton.addEventListener("click", function() {
    gameBoard.style.display = "block";
    game.getRound();
});

var winCount = document.getElementById("winCount");
var hintInPlay = document.getElementById("hintInPlay");
var wordInPlay = document.getElementById("wordInPlay");
var guessCount = document.getElementById("guessCount");
var guessedLetters = document.getElementById("guessedLetters");

var game = {
    rounds: [
        ["the chosen one", "buffy summers"],
        ["the champion", "spike"],
        ["hint", "word"],
        ["hint", "word"],
        ["hint", "word"],
        ["hint", "word"],
        ["hint", "word"],
        ["hint", "word"],
        ["hint", "word"],
        ["hint", "word"],
        ["hint", "word"],
        ["hint", "word"],
        ["hint", "word"],
        ["hint", "word"],
        ["hint", "word"],
        ["hint", "word"],
        ["hint", "word"],
        ["hint", "word"],
        ["hint", "word"]
    ],

    getRound: function() {
        var round = this.rounds[Math.floor(Math.random() * this.rounds.length)];
        currentHint = round[0];
        currentWord = round[1];
        hintInPlay.textContent = " " + currentHint;
        
        var letters = currentWord.split('');
        var spaces = [];
        for (var i = 0; i < letters.length; i++) {
            spaces.push(" _ ");
        }
        wordInPlay.textContent = spaces.join('');
    },

    updateRound: function() {
        // if letter is guess correctly, replace "_" with correcly guessed letter
    }
};

game.getRound();

document.onkeyup = function(event) {
    var userInput = event.key;
    console.log(userInput);
    // onkeyup check if the pressed key occurs in word
    // update the spaceholders with the correctly guessed letter
    // store wrong guesses in letters guessed
}