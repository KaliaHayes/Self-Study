let myBook = {
    title: "Kalia's Autobiography",
    author: 'Kalia Hayes',
    genre: 'that good good'
}

// dot notation
console.log(myBook.genre)
console.log(myBook)
console.log(myBook.title)
console.log(`My book is named ${myBook.title}`)

// way to change obj property
myBook.title = '1984'
console.log(myBook)

// Challenge
// model a person object (name, age, location)

let me = {
    name: 'Kalia Hayes',
    age: 22,
    location: "Dallas, Texas"
}

console.log(`${me.name} is ${me.age} and lives in ${me.location}`)

//increase age by 1 and print the same statement
console.log(`${me.name} is ${me.age + 1} and lives in ${me.location}`)
