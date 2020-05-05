//Write a program that takes a number as input and then displays a rectangle of 3 columns wide and 5 rows tall using that digit.

let num = prompt("What is the number?");
console.log(num + '' + num + '' + num);
for (let i = 0; i < 3; i++) {
    console.log(num + " " + num);
}
console.log(num + '' + num + '' + num);