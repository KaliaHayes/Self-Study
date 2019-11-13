let name // declare a variable, name, without assigning it a value

let getName = function(name) {
    return name
}

let out = getName() // name is still UNDEFINED
console.log(out)

//
let age = 22
age = null

console.log(age) // age is reassigned to NULL

// when we see NULL, we know something was explicility cleared by the dev
