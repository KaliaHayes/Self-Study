// func with multiple arguments
let add = function (x, y) {
    return x + y
}

let output = add(1, 2)
//  console.log(output)

//func with default values
let lead = function(name = 'Anon', score = 0) { //default values assigned
    return `Name: ${name}, Score: ${score}`
}

// lead('Kalia', 100)

let leader = lead(undefined, 69) // used undefined to provide default val for name
console.log(leader)

// Challenge

let tipCalc = function(total, tip = .20) {
    return `Your total is: ${total} and your tip turn's out to be: $${tip * total}`
}

let myTip = tipCalc(100)
// console.log(myTip)

let herTip = tipCalc(100, .15)
// console.log(herTip)

// string formatting

console.log(myTip)
console.log("Kalia" + "Hayes")

// template string - ${stringVariable}
let myname = 'Kalia'
let myage = 22
console.log(`These are my characters that I am choosing to use. Believe it. - ${myname} (${myage})`)