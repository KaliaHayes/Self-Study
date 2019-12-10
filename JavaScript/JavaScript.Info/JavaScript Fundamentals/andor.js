// Write an “if” condition to check that age is between 14 and 90 inclusively.

// “Inclusively” means that age can reach the edges 14 or 90.

let age = 22;
let test = (age >= 14 && age <= 90) ? true : false;
console.log(test)

// Write the code which asks for a login with prompt.

// If the visitor enters "Admin", then prompt for a password, if the input is an empty line or Esc – show “Canceled”, if it’s another string – then show “I don’t know you”.

// The password is checked as follows:

// If it equals “TheMaster”, then show “Welcome!”,
// Another string – show “Wrong password”,
// For an empty string or cancelled input, show “Canceled”

let login = prompt('Who are you?', '');
let password = ''

let access = (login == 'Admin') ? password = prompt('Enter your password') : (login == '') ? 'Canceled' : (login != 'Admin' || login != '') ? "I don't know you!" : '';

let greet = (password == 'TheMaster') ? alert('Welcome!') : (password != 'TheMaster') ? alert('Wrong password!') : (password == null) ? 'Canaceled' : '';