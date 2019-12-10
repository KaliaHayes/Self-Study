// rewrite using ternary
    // let result;

    // if (a + b < 4) {
    //   result = 'Below';
    // } else {
    //   result = 'Over';
    // }

let a = 21;
let b = -123;

let res = (a + b < 4) ? 'Below' : 'Over';
console.log(res)

// Rewrite if..else using multiple ternary operators '?'.

// For readability, it’s recommended to split the code into multiple lines.

    // let message;

    // if (login == 'Employee') {
    //   message = 'Hello';
    // } else if (login == 'Director') {
    //   message = 'Greetings';
    // } else if (login == '') {
    //   message = 'No login';
    // } else {
    //   message = '';
    // }


let login = 'Director'
let message = (login == 'Employee') ? 'Hello' : (login == 'Director') ? 'Greetings' : (login == '') ? 'No login' : '';

console.log(message)