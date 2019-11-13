let myBook = {
    title: "Kalia's Autobiography",
    author: 'Kalia Hayes',
    pageCount: 265
}

let otherBook = {
    title: "1984",
    author: 'G. Orwell',
    pageCount: 365
}

// create a function that accepts a book and generates a message
// by returning an object from a function, we can pass multiple values

let getSum = function(book) {
    return {
        summary: `${book.title} by ${book.author} has ${book.pageCount} pages.`,
        info: `${book.title}, ${book.author}, ${book.pageCount}`
    }

}

let book1 = getSum(myBook)
let book2 = getSum(otherBook)

console.log(book1.summary)
console.log(book2.info)

// Create a function that returns an object
// create an object within a function that convert fahrenheit to C and K
// return an object with all three

let convert = function(f) {
    let cel = (f - 32) * (5/9) 
    let kel = ((f - 32) * (5/9)) + 273.15 
    return {
        c: `Your temp is ${f}f, which is ${cel} in Celcius`,
        k: `Your temp is ${f}f, which is ${kel} in Kelvin`
    }
}

let converted = convert(32)

console.log(converted)