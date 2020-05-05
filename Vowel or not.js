//4. Program to accept the character from the user and check if the entered character is Vowel or not.Please note that the condition has to be checked for both upper and lowercase.
let char = prompt("What is the letter??").toUpperCase();
if (char == "A" || char == "E" || char == "I" || char == "O" || char == "U") {
    console.log(char + ' is a vowel');
}
else {
    console.log(char + ' is a consonant');
}