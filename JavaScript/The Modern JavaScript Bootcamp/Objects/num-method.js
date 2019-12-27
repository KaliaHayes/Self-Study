// toFixed (remove decimals)
let num = 69.420
console.log(num.toFixed(0))

// Round
console.log(Math.round(num))

// Floor - forces you to round down to the nearest integer
console.log(Math.floor(num))

// Random - generate a number between 0 - 1
console.log(Math.random())

// CHALLENGE
// take in a person's guess (1-5), and generate a random number and figure out if the guess is correct

let makeGuess = function(guess) {
    let min = 1
    let max = 5
    let rand = Math.floor(Math.random() * (max - min + 1)) + min
    
    return guess == rand
}

console.log(makeGuess(1)) //if rand num is 1, get true - else get false