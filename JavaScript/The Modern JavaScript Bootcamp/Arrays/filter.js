const notes = [{
    title: 'Friday 1/3',
    body: 'Working on JS',
    completed: true
}, {
    title: 'Saturday 1/4',
    body: 'Relaxing and having a good time',
    completed: false
}, {
    title: 'Sunday 1/5',
    body: 'Watching the Eagles lose',
    completed: false
}]

let filtered = notes.filter(function(note, index) {
    const isTitleMatch = note.title.includes('Sun');
    const isBodyMatch = note.body.includes('and');

    return isTitleMatch || isBodyMatch
})

// console.log(filtered)

const findNotes = function (notes, query) {
    return notes.filter(function(note, index) {
        const isTitleMatch = note.title.includes(query + '');
        const isBodyMatch = note.body.includes(query + '');
    
        return isTitleMatch || isBodyMatch
    })
}

// console.log(findNotes(notes, 'day'))

// --------------------------------------------

// Challenge

// Create a function that filters out the completed items from your to-do list
// Show those that have a completed value of false


let leftToDo = function(list) {
    return list.filter(function(note, index) {
        return !note.completed // Return the items in your to do list that are NOT completed
    })

}

let leftToDoToo = function(list) {
    function notDone(note) {
        return !note.completed // Return the items in your to do list that are NOT completed
    }

    return list.filter(notDone)

}

//console.log(leftToDo(notes))

console.log(leftToDoToo(notes))