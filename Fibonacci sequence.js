//2. Program to print the below series: 0 1 1 2 3 5 8 13
let num = parseInt(prompt("How many numbers of the Fibonacci sequence would you like to have displayed?"));
let x = 0;
let y = 1;
let next = x + y;
console.log(x);
console.log(y);
console.log(next)
for (let i = 3; i < num; i++) {
    x = y;
    y = next;
    next = x + y;
    console.log(next);
}