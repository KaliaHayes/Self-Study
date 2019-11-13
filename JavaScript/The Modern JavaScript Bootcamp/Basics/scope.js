// JS uses Lexical or Static scoping
// Global scope - Everything defined outside all code blocks
// Local scope - Everything define inside a code block

// In a scope, you can access variables in that scope or in any parent/ancestor scope
// This is why you can access varOne in our if code block, but not varTwo outside of the block

// Global scope (varOne)
    // Local scope (varTwo)
        // Local scope (varFour)
    // Local scope (varThree)

let varOne = 'varOne' // Global

if (true) {
    console.log(varOne)

    let varTwo = 'varTwo' // Local

    if (true) {
        let varFour = 'varFour'
    }
}

if (true) {
    let varThree = 'varThree'
}

// console.log(varTwo) // will print and ERROR bc varTwo is not in the global scope. It is scoped to the if statement