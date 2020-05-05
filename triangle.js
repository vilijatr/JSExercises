//5. Write a program to check whether a triangle is Equilateral, Isosceles or Scalene.

let sides = prompt("What is the length of each of the three sides of the triangle in question? Separate the values with a comma, thank you!");
let a = parseInt(sides.split(",")[0]);
let b = parseInt(sides.split(",")[1]);
let c = parseInt(sides.split(",")[2]);
if ((a + b + b > c)
    && (b + c > a)
    && (c + a > b)) {
    //Equilateral
    if (a === b && b === c) {
        console.log("The triangle is Equilateral");
    }
    //Scalene
    else if (a !== b && a !== c && b !== c) {
        console.log("The triangle is Scalene");
    }
    //Isosceles
    else {
        console.log("The triangle is Isosceles ");
    }
}
else {
    console.log("You must have made a mistake, this is not a triangle!")
}