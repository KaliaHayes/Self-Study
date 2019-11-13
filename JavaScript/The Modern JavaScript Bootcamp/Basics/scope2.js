// Global
    // Local
        // Local
    // Local

let name = 'Kalia'

if (true) {
    let name = 'Renee' // define a new name, but it's different from the global name so it will print
    if (true) {
        name = 'Hayes'
        console.log(name)
    }    
    console.log(name) // will print 'Hayes' because the above if statement change the value of name
}

if (true) {
    console.log(name) // will print the Global name 'Kalia'
}