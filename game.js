//Declare a function
//Use Math.random and Math.floor to generate a random item from the array list which will be the computer choice

let getComputerChoice = function() {
    const choose = ['Rock', 'Paper', 'Scissors'] 
    return choose[Math.floor(Math.random() * choose.length)]
}
// Declare variables that will store points and a function that will increment each time called
let player_score = 0;
let computer_score = 0;
let player = function() {
    player_score = player_score + 1;
}
let computer = function() {
    computer_score = computer_score + 1;
}
//Declare a function that takes two parameters
//Create conditional statements depending on combinations given by player and computer and ensure that input is case insensitive
//Output a string message that declares the winner based on the combination.
//Run your code using the players selection and computer choice as arguments 
function computerAgainstPlayer(playerSelection, computerSelection) {
    if (playerSelection == null) {
        return ('Try again. Enter Rock, Paper or Scissors');
    //convert both comparisons to uppercase for comparison to work
    }  else if (playerSelection.toUpperCase() == computerSelection.toUpperCase()) {
        player();
        computer();
        return (`Draw! You both selected ${playerSelection}`);
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
    } else {
        return ('Try again. Enter Rock, Paper or Scissors');
    } 
}
//Play the game for 5 rounds
console.log(computerAgainstPlayer(prompt('Enter Rock or Paper or Scissors'), getComputerChoice()));
console.log(computerAgainstPlayer(prompt('Enter Rock or Paper or Scissors'), getComputerChoice()));
console.log(computerAgainstPlayer(prompt('Enter Rock or Paper or Scissors'), getComputerChoice()));
console.log(computerAgainstPlayer(prompt('Enter Rock or Paper or Scissors'), getComputerChoice()));
console.log(computerAgainstPlayer(prompt('Enter Rock or Paper or Scissors'), getComputerChoice()));

// Declare the winner
(player_score > computer_score) ? console.log(`Player is the Winner, score ${player_score}-${computer_score}`):
(player_score < computer_score) ? console.log(`Computer is the Winner, score ${computer_score}-${player_score}`):
console.log(`Player and Computer have drawed, score ${player_score}-${computer_score}`)







