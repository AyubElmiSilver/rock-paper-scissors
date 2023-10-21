const button = document.querySelectorAll('#one');
let playerSelection;
button[0].addEventListener('click', () => {
    playerSelection = 'rock';
    const div = document.querySelector('.box-one');
    div.style.cssText = 'background-color: blue;';
    conditional:
    if (player_score < 5 && computer_score < 5) {
        console.log(computerAgainstPlayer(getComputerChoice()));
    div.textContent = `The Current Score Is Player: ${player_score} - Computer: ${computer_score}`;
    } else if (player_score === 5) {
        div.textContent = `The Winner Is Player, Player: ${player_score} - Computer: ${computer_score}`; 
        break conditional;
    } else if (computer_score === 5) {
        div.textContent = `The Winner Is Computer, Computer: ${computer_score} - Player: ${player_score}`;
        break conditional;
    }
 }
);
button[1].addEventListener('click', () => {
    playerSelection = 'paper';
    const div = document.querySelector('.box-one');
    div.style.cssText = 'background-color: blue;';
    conditional:
    if (player_score < 5 && computer_score < 5) {
        console.log(computerAgainstPlayer(getComputerChoice()));
    div.textContent = `The Current Score Is Player: ${player_score} - Computer: ${computer_score}`;
    } else if (player_score === 5) {
        div.textContent = `The Winner Is Player, Player: ${player_score} - Computer: ${computer_score}`; 
        break conditional;
    } else if (computer_score === 5) {
        div.textContent = `The Winner Is Computer, Computer: ${computer_score} - Player: ${player_score}`;
        break conditional;
    }
})
button[2].addEventListener('click', () => {
    playerSelection = 'scissors';
    const div = document.querySelector('.box-one');
    div.style.cssText = 'background-color: blue;';
    conditional:
    if (player_score < 5 && computer_score < 5) {
        console.log(computerAgainstPlayer(getComputerChoice()));
    div.textContent = `The Current Score Is Player: ${player_score} - Computer: ${computer_score}`;
    } else if (player_score === 5) {
        div.textContent = `The Winner Is Player, Player: ${player_score} - Computer: ${computer_score}`;  
        break conditional;
    } else if (computer_score === 5){
        div.textContent = `The Winner Is Computer, Computer: ${computer_score} - Player: ${player_score}`;
        break conditional;
    }

})

function getComputerChoice () {
    const choose = ['Rock', 'Paper', 'Scissors'] 
    return choose[Math.floor(Math.random() * choose.length)]
}

let player_score = 0;
let computer_score = 0;
function player () {
    player_score = player_score + 1;
}
function computer () {
    computer_score = computer_score + 1;
}

function computerAgainstPlayer(computerSelection) {
     if (playerSelection.toUpperCase() == computerSelection.toUpperCase()) {
        player();
        computer();
        return (`Draw! You both selected ${playerSelection.toUpperCase()}`);
    } else if (playerSelection.toUpperCase() == 'ROCK' && computerSelection == 'Scissors') {
        player();
        return ('You Win! Rock beats Scissors'); 
    } else if (playerSelection.toUpperCase() == 'ROCK' && computerSelection == 'Paper') {
        computer();
        return ('You lose! Paper beats Rock'); 
    } else if (playerSelection.toUpperCase() == 'PAPER' && computerSelection == 'Rock') {
        player();
        return ('You Win! Paper beats Rock'); 
    } else if (playerSelection.toUpperCase() == 'PAPER' && computerSelection == 'Scissors') {
        computer();
        return ('You Lose! Scissors beats Rock'); 
    } else if (playerSelection.toUpperCase() == 'SCISSORS' && computerSelection == 'Paper') {
        player();
        return ('You Win! Scissors beats Paper'); 
    } else if (playerSelection.toUpperCase() == 'SCISSORS' && computerSelection == 'Rock') {
        computer();
        return ('You Lose! Rock beats Scissors '); 
    } 
}









