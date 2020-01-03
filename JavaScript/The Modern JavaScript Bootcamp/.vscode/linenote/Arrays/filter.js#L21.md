# findNotes()

I created a function findNotes() that takes in two values, one is the name of the notes list, and the other is a query string to be searched for in the notes.

The function searches the title and body of our note objects in the array to see if they include the query value using the .includes() method.

The function returns a boolean if the query value is included in the notes title OR body.

If the boolean returns true, that note is filtered into a new array where only the objects that satisfy the boolean are included.