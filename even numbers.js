// 1. Program to accept 10 numbers from user and display the even ones.
let arr = [];
for (let i = 0; i < 4; i++) {
    let num = prompt("Please provide 10 numbers. " + i + ". number is: ");
    if (num % 2 == 0) {
        arr.push(num);
    }
}
console.log('Even numbers are: ' + arr);