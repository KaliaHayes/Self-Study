// function - input, code, output

let greet = function() {
    console.log('Hello user!')
}

greet() // how you call the function that's stored in the greet variable

// num is an argument, or a value which passes through a function
let sq = function(num) {
    let result = num ** 2 // num * num OR num^2
    return result // return can only be used a single time IN FUNCTIONS
}

sq(9) // this won't print a return, as it's not properly snytaxed

let value = sq(3) // must set a function call to a variable when using return!
let val = sq(9)

console.log(value, val)

// Challenge

// Create a function that converts f to celcius

let convert = function(temp) {
    let c = (temp - 32) * (5/9)
    return c
}

let myTemp = 32
let converted = convert(myTemp)
console.log(myTemp ,'in celcius is', converted)