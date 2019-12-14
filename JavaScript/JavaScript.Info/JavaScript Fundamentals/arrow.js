// Arrow Functions

let test = (x,y) => alert(x + y);
// test(7,9)

let age = prompt("What is your age?", 18);

let welcome = (age < 18) ?
  () => alert('Hello') :
  () => alert("Greetings!");


// return multiple lines
let sum = (a,b) => {
    let result = a+b;
    return result
}

// CHALLENGES
// Replace Function Expressions with arrow functions in the code below:

// function ask(question, yes, no) {
//   if (confirm(question)) yes()
//   else no();
// }

// ask(
//   "Do you agree?",
//   function() { alert("You agreed."); },
//   function() { alert("You canceled the execution."); }
// );

function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
  }
  
  ask(
    "Do you agree?",
    () => alert("You agreed."),
    () => alert("You canceled the execution.")
  );