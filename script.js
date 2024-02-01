const userOutput = document.getElementById("user-output1");
const compOutput = document.getElementById("comp-output1");

const buttons = ["rock", "paper", "scissors"];
let userCount = 0;
let compCount = 0;

function initializeGame() {
  buttons.forEach(function (type) {
    document
      .getElementById(`${type}-button`)
      .addEventListener("click", function () {
        const userChoice = type;
        console.log("User chose: " + userChoice);

        const compChoice = randomChoice();
        console.log("comp chose: " + compChoice);

        Output(userChoice, compChoice);
      });
  });
}

// Call the function to initialize the game
initializeGame();

function randomChoice() {
  return buttons[Math.floor(Math.random() * buttons.length)];
}

function updateUserOutput(emoji) {
  userOutput.innerHTML = document.getElementById(`${emoji}-button`).innerHTML;
}

function updateCompOutput(emoji) {
  compOutput.innerHTML = document.getElementById(`${emoji}-button`).innerHTML;
}

function updateCount(userCount, compCount) {
  if (userCount < 3 || compCount < 3) {
    document.getElementById("user-p").innerHTML = `Player: ${userCount}`;
    document.getElementById("comp-p").innerHTML = `Computer: ${compCount}`;
  } else if (userCount == 4) {
    alert("PLAYER WON!");
    userCount = 0;
    compCount = 0;
  } else {
    alert("COMPUTER WON!");
    userCount = 0;
    compCount = 0;
  }
}

function Output(userChoice, compChoice) {
  const outcomes = {
    rock: { beats: "scissors", losesTo: "paper" },
    paper: { beats: "rock", losesTo: "scissors" },
    scissors: { beats: "paper", losesTo: "rock" },
  };

  if (userChoice === compChoice) {
    updateUserOutput(userChoice);
    updateCompOutput(compChoice);
    updateCount(userCount, compCount);
  } else if (outcomes[userChoice].beats === compChoice) {
    userCount++;
    updateUserOutput(userChoice);
    updateCompOutput(compChoice);
    updateCount(userCount, compCount);
  } else {
    compCount++;
    updateUserOutput(userChoice);
    updateCompOutput(compChoice);
    updateCount(userCount, compCount);
  }
}
