// The for loop allows for more flexibilty vs the forEach method which can only be applied on methods

// Counting... 1... n

let agenda = [{}, {
    title: 'Friday 1/3',
    body: 'Working on JS'
}, {
    title: 'Saturday 1/4',
    body: 'Relaxing and having a good time'
}, {
    title: 'Sunday 1/5',
    body: 'Watching the Eagles lose'
}]

// const findNote = function (notes, noteTitle) {
//     const index = notes.findIndex(function (note, index){
//         return note.title === noteTitle // case-sensitve search
//     })

//     return notes[index]
// }

// const todo = findNote(agenda, 'Saturday 1/4')

// console.log(todo)

// Use indexOf to search for the missing Note 4 - should return -1 as it's note in the array

// note refers to each item/object in the agenda array
const index = agenda.findIndex(function (note) {
    return note.title === 'Friday 1/3'
})

console.log(index) // returns index of the match using findIndex


const found = agenda.find(function (note) {
    return note.title === 'Friday 1/3'
})

console.log(found) // returns item directly, not the index, using .find()