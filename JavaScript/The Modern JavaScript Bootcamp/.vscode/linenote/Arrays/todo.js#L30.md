# Delete element based on value

I created a function(deleteTodo) that took in the name of a to do list and a title of a note within the to do list and it deleted that note based on the title passed into the function.

I used the .findIndex() method to find the index of whichever note within my to do list matched noteTitle, which is passed into the function. 

This index was stored in a variable called deleteIndex. I then used the splice method to remove one element starting at deleteIndex - 1 (to adjust for the 0 based indexing).

I printed the list before deleting and after deleting.
