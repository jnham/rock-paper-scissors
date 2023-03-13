let wins = 0;
let losses = 0;
const playerChoice = document.getElementById("playerChoice");
const computerChoice = document.getElementById("computerChoice");
const playerScore = document.getElementById("player-score");
const computerScore = document.getElementById("computer-score");
const resultImage = document.getElementById("resultImage");
const statusText = document.getElementById("status-text");
const gameIcons = document.getElementById("icons");
const resetIcon = document.getElementById("reset");
const weaponText = document.getElementById("weapon-text");

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) {
        return "rock";
    }
    else if (randomNumber === 1) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    let result = "";
    

    if (computerSelection === "rock") {
        computerChoice.src="images/rock.png";
    }
    else if (computerSelection === "paper") {
        computerChoice.src="images/paper1.png";
    }
    else {
        computerChoice.src="images/scissors.png";
    }

    if (playerSelection === "rock") {
        playerChoice.src="images/rock.png";
    }
    else if (playerSelection === "paper") {
        playerChoice.src="images/paper1.png";
    }
    else {
        playerChoice.src="images/scissors.png";
    }

    if (playerSelection === computerSelection) {
        result = "It's a tie!";
        resultImage.src="images/cattie.jpg";
        statusText.textContent = "A tie?... Interesting... We go again!";
    }
    else if (playerSelection === "rock") {
        if (computerSelection === "paper") {
            result = "You lose! Paper beats Rock";
            resultImage.src="images/rockcatwins.jpg";
            statusText.textContent = "I have mastered your \"Rock\". You lose!";
        }
        else {
            result = "You win! Rock beats Scissors";
            resultImage.src="images/rockcatloses.png";
            statusText.textContent = "Curses, foiled by rocks. You win!";
        }
    }
    else if (playerSelection === "paper") {
        if (computerSelection === "scissors") {
            result = "You lose! Scissors beats Paper";
            resultImage.src="images/papercatwins.png";
            statusText.textContent = "Your paper only makes me stronger. You lose!";
        }
        else {
            result = "You win! Paper beats Rock";
            resultImage.src="images/papercatloses.jpg";
            statusText.textContent = "Ahhh!! Two-ply! My weakness! You win!";
        }
    }
    else if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            result = "You lose! Rock beats Scissors";
            resultImage.src="images/scissorscatwins.jpg";
            statusText.textContent = "Your shears do not affect me. You lose!";
        }
        else {
            result = "You win! Scissors beats Paper";
            resultImage.src="images/scissorscatloses.png";
            statusText.textContent = "Your blade is sharp. You win!";
        }
    }

    if (result.includes("win")) {
        wins ++;
    }
    else if (result.includes("lose")) {
        losses ++;
    }

    playerScore.textContent = wins;
    computerScore.textContent = losses;

    console.log(result);

    if (wins >= 5) {
        resultImage.src="images/catloses.png";
        statusText.textContent = "You win!!! How could this be??";
        gameIcons.style.display = "none";
        resetIcon.style.display = "block";
        weaponText.textContent = "Play again?"
    }
    else if (losses >= 5) {
        resultImage.src="images/catwins.png";
        statusText.textContent = "You lose! That was fun :)";
        gameIcons.style.display = "none";
        resetIcon.style.display = "block";
        weaponText.textContent = "Play again?"
    }
}

function reset() {
    wins = 0;
    losses = 0;
    playerScore.textContent = wins;
    computerScore.textContent = losses;
    resultImage.src="images/angry-cat.jpg";
    statusText.textContent = "Rock Paper Scissors... First to 5 wins...";
    gameIcons.style.display = "flex";
    resetIcon.style.display = "none";
    weaponText.textContent = "Choose your weapon!"
}
function game() {
    let wins = 0;
    let losses = 0;
    let ties = 0;
    let playerSelection;

    for (let i = 0; i < 5; i ++) {
        if (i === 0) {
            playerSelection = prompt("Rock, Paper, or Scissors?");
            if (playerSelection === null) {
                return;
            }
            playerSelection = playerSelection.toLowerCase();

            while (playerSelection !== "rock" && playerSelection !== "paper" && playerSelection !== "scissors") {
                playerSelection = prompt("Please enter a valid choice: Rock, Paper, or Scissors?");
                if (playerSelection === null) {
                    return;
                }
                playerSelection = playerSelection.toLowerCase();
            }
        }
        else {
            playerSelection = prompt("Rock, Paper, or Scissors? The score is " + wins + " wins, " + losses + " losses, and " + ties + " ties!");
            if (playerSelection === null) {
                return;
            }
            playerSelection = playerSelection.toLowerCase();

            while (playerSelection !== "rock" && playerSelection !== "paper" && playerSelection !== "scissors") {
                playerSelection = prompt("Please enter a valid choice: Rock, Paper, or Scissors? The score is " + wins + " wins, " + losses + " losses, and " + ties + " ties!");
                if (playerSelection === null) {
                    return;
                }
                playerSelection = playerSelection.toLowerCase();
            }
        }
        let result = playRound(playerSelection, computerSelection);
        console.log(result);
        alert(result);

        if (result.includes("win")) {
            wins ++;
        }
        else if (result.includes("lose")) {
            losses ++;
        }
        else {
            ties ++;
        }
    }
 
    if (wins > losses) {
        console.log("You win the game with " + wins + " wins, " + losses + " losses, and " + ties + " ties!");
        alert("You win the game with " + wins + " wins, " + losses + " losses, and " + ties + " ties!");
    }
    else if (losses > wins) {
        console.log("You lose the game with " + wins + " wins, " + losses + " losses, and " + ties + " ties!");
        alert("You lose the game with " + wins + " wins, " + losses + " losses, and " + ties + " ties!");
    }
    else {
        console.log("You tie the game with " + wins + " wins, " + losses + " losses, and " + ties + " ties!");
        alert("You tie the game with " + wins + " wins, " + losses + " losses, and " + ties + " ties!");
    }

    const replay = confirm("Would you like to play again?");
    if (replay) {
        game();
    }
}