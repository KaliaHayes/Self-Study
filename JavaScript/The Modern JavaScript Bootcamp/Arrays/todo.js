// // create an array of 5 TODOs
// // then create a message to print out the notes length
// // then print the first and second to last items to the terminal

const notes = ['Finish this course', 'Make it to my meeting', 'Shop for Christmas presents', 'Eat', 'Live']

// let notesTaken = `You have ${notes.length} notes in your list.`
// let challenge = `The first item in your list is: ${notes[0]}, and the second to last item in your list is: ${notes[notes.length - 2]}`

// console.log(notesTaken)
// console.log(challenge)

// // forEach method takes a single argument (actually a function)

// notes.forEach(function(item, index) {
//     console.log(index)
//     console.log(item)
// })

//Challenge
// print the items in your notes like so: 1. item1, 2. item2... n

notes.forEach(function(item, index) {
    console.log(`${index + 1}. ${item}`)
})

for (i = 0; i <= notes.length - 1; i++) {
    let index = i + 1
    let currNote = notes[i]
    console.log(`${index}. ${currNote}`)
}