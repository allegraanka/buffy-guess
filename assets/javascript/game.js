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
var wins = 0;
var losses = 0;
var won = false;
var lost = false;

var game = {
    rounds: [
        ["the chosen one", "buffy"],
        ["the champion", "spike"],
        ["kills vamps", "stake"],
        ["he watches", "giles"],
        ["he sees", "xander"],
        ["the witch", "willow"],
        ["girlfriend", "tara"],
        ["used to be a demon", "anya"],
        ["anya's worst fear", "bunnies"],
        ["under the library", "hellmouth"],
        ["the town where buffy lived", "sunnydale"],
        ["had a soul first", "angel"],
        ["he was a werewolf", "oz"],
        ["once more with", "feeling"],
        ["they got the what? out", "mustard"],
        ["grrrrr", "arrrggghhh"],
        ["absent that decade", "faith"],
        ["killed by andrew to open the hellmouth", "jonathan"],
        ["friendly disposition, despite being a demon who eats kittens", "clem"]
    ],

    initializeGame: function() {
            hintInPlay = "";
            wordInPlay = "";
            lettersGuessed = "";
            guessCount = "";
    },

    getRound: function() {
        var round = this.rounds[Math.floor(Math.random() * this.rounds.length)];
        var guessesLeft = 10;
        currentHint = round[0];
        currentWord = round[1];
        hintInPlay.textContent = " " + currentHint;
        guessCount.textContent = guessesLeft;
        lettersGuessed.textContent = "";
        
        var letters = currentWord.split('');
        var spaces = [];
        for (var i = 0; i < letters.length; i++) {
            spaces.push(" _ ");
        }
        wordInPlay.textContent = spaces.join(' ');

        document.onkeyup = function (event) {
            var userInput = event.key;
            // if (won) {
            //   return false;
            // }
            for (var i = 0; i < currentWord.length; i++) {
                if (currentWord.charAt(i) === userInput) {
                    spaces[i] = userInput;
                    wordInPlay.textContent = spaces.join(' ');
                } 
            }
            if (spaces.join('') === currentWord) {
                guessCount.textContent = "You won! Play again!";
                wins++;
                document.getElementById("wins").textContent = "wins: " + wins;
                won = true;
            }
            if (!currentWord.includes(userInput)) {
                var wrongLetter = document.createElement("li");
                wrongLetter.textContent = userInput;
                lettersGuessed.append(wrongLetter);
                guessesLeft--;
                guessCount.textContent = guessesLeft;
            }
            if (guessesLeft <= 0) {
                guessCount.textContent = "Ooops! GAME OVER.";
                losses++;
                document.getElementById("losses").textContent = "losses: " + losses;
                lost = true;
            }
        }
    }
};

game.getRound();