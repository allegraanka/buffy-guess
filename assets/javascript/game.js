console.log("Loaded");

// start a new game, display game board on-click
var gameBoard = document.getElementById("gameBoard");
var startButton = document.getElementById("startButton");

startButton.addEventListener("click", function() {
    gameBoard.style.display = "block";
});