// // Run string methods on your name
// let name = 'Kalia Hayes'
// console.log(name.length)

// let upper = name.toUpperCase()
// console.log(upper)

// let lower = name.toLowerCase()
// console.log(lower)

//     // Are you a Hayes?
// console.log(name.includes('Hayes'))



// // Trim

// name = ' _ Kalia Hayes _ '

// console.log(name)
// console.log(name.trim())



// CHALLENGE

// create a function called passCheck which validates a password
    // criteria: only return true is the length is more than 8 and it doesn't contain the work password

let passCheck = (password) => {
    let weak;

    if (password.includes('password') || password.length <= 8) {
        weak = true
    }

    if (weak) {console.log(`Your password is too weak!`)} else {console.log(`Good password!`)}
}

passCheck('abc123')
passCheck('password97')
passCheck('whatAStrongPW')