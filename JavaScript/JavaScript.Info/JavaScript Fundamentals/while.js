// use a for loop to output even numbers 2 - 20

for (let i = 1; i <= 20; i++) {
    if (i % 2 == 0) {
        console.log(i)
    }
}

// rewrite the code from a for to a while loop
let i = 0;
while (i < 3) {
    console.log(`number ${i}`);
    i++;
}

// write a loop which prompts for a number greater than 100.
// if the visitor enters another number, ask them to input again.

let num = prompt('Enter a number greater than 100: ', '');

while (num < 100) {
    num
}