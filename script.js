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
    if (playerSelection === computerSelection) {
        return "It's a tie!";
    }
    else if (playerSelection === "rock") {
        if (computerSelection === "paper") {
            return "You lose! Paper beats Rock";
        }
        else {
            return "You win! Rock beats Scissors";
        }
    }
    else if (playerSelection === "paper") {
        if (computerSelection === "scissors") {
            return "You lose! Scissors beats Paper";
        }
        else {
            return "You win! Paper beats Rock";
        }
    }
    else if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            return "You lose! Rock beats Scissors";
        }
        else {
            return "You win! Scissors beats Paper";
        }
    }
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
        let computerSelection = getComputerChoice();
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