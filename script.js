let choices = document.querySelector('.choices');
let feedback = document.querySelector('.feedback');
let computerScoreDisplay = document.querySelector('.computer');
let playerScoreDisplay = document.querySelector('.player');
let result = document.querySelector('.result');

let computerScore = 0;
let playerScore = 0;

let generateComputerChoice = () => {
    let randomNumber = Math.trunc(Math.random() * 29);
    
    if (randomNumber <= 9) {
        return 'rock';
    } else if (randomNumber <= 19) {
        return 'scissor';
    } else {
        return 'paper';
    }
}

let compareChoices = (computerChoice, playerChoice) => {
    if (computerChoice === playerChoice) {
        feedback.textContent = `Computer chose ${computerChoice}. It's a draw.`;
    } else if (computerChoice === 'rock' && playerChoice === 'paper') {
        feedback.textContent = `Computer chose ${computerChoice}. You win.`;
        playerScore++;
        playerScoreDisplay.textContent = playerScore;
    } else if (computerChoice === 'rock' && playerChoice === 'scissor') {
        feedback.textContent = `Computer chose ${computerChoice}. You lose.`
        computerScore++;
        computerScoreDisplay.textContent = computerScore;
    } else if (computerChoice === 'paper' && playerChoice === 'rock') {
        feedback.textContent = `Computer chose ${computerChoice}. You lose.`;
        computerScore++;
        computerScoreDisplay.textContent = computerScore;
    } else if (computerChoice === 'paper' && playerChoice === 'scissor') {
        feedback.textContent = `Computer chose ${computerChoice}. You win.`
        playerScore++;
        playerScoreDisplay.textContent = playerScore;
    } else if (computerChoice === 'scissor' && playerChoice === 'rock') {
        feedback.textContent = `Computer chose ${computerChoice}. You win.`;
        playerScore++;
        playerScoreDisplay.textContent = playerScore;
    } else if (computerChoice === 'scissor' && playerChoice === 'paper') {
        feedback.textContent = `Computer chose ${computerChoice}. You lose.`
        computerScore++;
        computerScoreDisplay.textContent = computerScore;
    }
}

let checkScore = () => {
    if (computerScore === 5) {
        choices.remove();
        result.style.color = 'red';
        result.textContent = 'You lose. Reload to play again.';
    } else if (playerScore === 5) {
        choices.remove();
        result.style.color = 'green';
        result.textContent = 'You win. Reload to play again.';
    }
}

choices.addEventListener('click', e => {
    if (e.target.parentElement.className.includes('choice')) {
        let computerChoice = generateComputerChoice();
        let playerChoice = e.target.parentElement.id;
        
        compareChoices(computerChoice, playerChoice);

        checkScore();
    }
})

