// // create an array of 5 TODOs
// // then create a message to print out the notes length
// // then print the first and second to last items to the terminal

const notes = ['Finish this course', 'Make it to my meeting', 'Shop for Christmas presents', 'Eat', 'Live']

// Challenge

// convert the array of strings into an array of objects with more properties
// new objects now have text & completed (boolean)

let todos = [{
    text: 'Finish this course',
    complete: false
}, {
    text: 'Make it to my meeting',
    complete: false
}, {
    text: 'Eat',
    complete: true
}, {
    text: 'Live',
    complete: true
}]

// create a function to remove a todo by text value - try and make it case-insensitive
// if there's no match, do nothing
// find the index of an 

let deleteTodo = function(list, noteTitle) {
    let deleteIndex = list.findIndex(function (item) {
        return item.title === noteTitle
    })
    if (deleteIndex > -1) {
       list.splice(deleteIndex, 1)
    }
}
console.log(todos) // All items
deleteTodo(todos, 'Eat') // Delete this item
console.log(todos) // List with the deleted item gone