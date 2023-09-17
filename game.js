//Declare a function
//Use Math.random and Math.floor to generate a random item from the array list which will be the computer choice

let getComputerChoice = function() {
    const choose = ['Rock', 'Paper', 'Scissors'] 
    return choose[Math.floor(Math.random() * choose.length)]
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
        return (`Draw! You both selected ${playerSelection}`);
    } else if (playerSelection.toUpperCase() == 'ROCK' && computerSelection == 'Scissors') {
        return ('You Win! Rock beats Scissors'); 
    } else if (playerSelection.toUpperCase() == 'ROCK' && computerSelection == 'Paper') {
        return ('You lose! Paper beats Rock'); 
    } else if (playerSelection.toUpperCase() == 'PAPER' && computerSelection == 'Rock') {
        return ('You Win! Paper beats Rock'); 
    } else if (playerSelection.toUpperCase() == 'PAPER' && computerSelection == 'Scissors') {
        return ('You Lose! Scissors beats Rock'); 
    } else if (playerSelection.toUpperCase() == 'SCISSORS' && computerSelection == 'Paper') {
        return ('You Win! Scissors beats Paper'); 
    } else if (playerSelection.toUpperCase() == 'SCISSORS' && computerSelection == 'Rock') {
        return ('You Lose! Rock beats Scissors '); 
    } else {
        return ('Try again. Enter Rock, Paper or Scissors');
    } 
}


console.log(computerAgainstPlayer(prompt('Enter Rock or Paper or Scissors'), getComputerChoice()));
