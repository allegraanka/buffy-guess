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
var lettersGuessed = document.getElementById("lettersGuessed");

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
        var guessesLeft = 10;
        
        var letters = currentWord.split('');
        var spaces = [];
        for (var i = 0; i < letters.length; i++) {
            spaces.push(" _ ");
        }
        wordInPlay.textContent = spaces.join(' ');

        document.onkeyup = function (event) {
            var userInput = event.key;
            for (var i = 0; i < currentWord.length; i++) {
                if (currentWord.charAt(i) === userInput) {
                    spaces[i] = userInput;
                    wordInPlay.textContent = spaces.join(' ');
                    guessesLeft--;
                    guessCount.textContent = guessesLeft;
                } 
            }
            if (spaces.join('') === currentWord) {
                console.log("you won! play again!"); 
                // display this message on the page and show 'play again' button that reloads game
            }
            if (!currentWord.includes(userInput)) {
                var wrongLetter = document.createElement("li");
                wrongLetter.textContent = userInput;
                lettersGuessed.append(wrongLetter);
                guessesLeft--;
                guessCount.textContent = guessesLeft;
            }
            if (guessesLeft <= 0) {
                guessCount.textContent = "GAME OVER.";
                console.log("GAME OVER.");
                // display this message on the page and show 'try again' button that reloads game
            }
        }
    }
};

game.getRound();