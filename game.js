//Declare a function
//Use Math.random and Math.floor to generate a random item from the array list

let getComputerChoice = function() {
    const choose = ['Rock', 'Paper', 'Scissors'] 
    return choose[Math.floor(Math.random() * choose.length)]
} 
console.log(getComputerChoice())