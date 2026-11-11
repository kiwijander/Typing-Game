// Variables for the DOM elements
const word = document.getElementById("word");
const text = document.getElementById("text");
const scoreEl = document.getElementById("score");
const timeEl = document.getElementById("time");
const endgameEl = document.getElementById("end-game-container");
const settings = document.getElementById("settings");
const settingsForm = document.getElementById("settings-form");
const settingsBtn = document.getElementById("settings-btn");
const difficultySelect = document.getElementById("difficulty");

// Array
const words = [
  "dependent",
  "dog",
  "superficial",
  "admit",
  "juice",
  "javascript",
  "developer",
  "airplane",
  "great",
  "fun",
  "manipulate",
  "cat",
  "transition",
  "school",
  "computer",
  "programming",
  "drag",
  "loving",
  "north",
];

//Initializing word
let randomWord;

//Initializing score
let score = 0;

//Initializing time
let time = 10;

// Part 1

// Show a random word
function addWordToDOM() {
  randomWord = words[Math.floor(Math.random() * words.length)];
  word.innerHTML = randomWord;
}

// Add 1 to the score
function updateScore() {
  score++;
  scoreEl.innerHTML = score;
}

// Runs when you type
text.addEventListener("input", function (e) {
  if (e.target.value === randomWord) {
    updateScore();
    addWordToDOM();
    time += timeBonus;
    timeEl.innerHTML = time + "s";
    e.target.value = "";
  }
});