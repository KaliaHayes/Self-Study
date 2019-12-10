// The following function returns true if the parameter age is greater than 18.

// Otherwise it asks for a confirmation and returns its result.

// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     return confirm('Did parents allow you?');
//   }
// }
// Rewrite it, to perform the same, but without if, in a single line.

let age;
function checkAge(age) {
    return (age > 18) ? true : confirm('Did you get permission?')
}

function checkAge2(age) {
    return (age > 18) || confirm('Did you get permission?')
}

// Write a function min(a,b) which returns the least of two numbers a and b.

// For instance:

// min(2, 5) == 2
// min(3, -1) == -1
// min(1, 1) == 1

function min(a,b) {
    return (a < b) ? a : b
}

console.log(min(-555,-44))