// nested if else 

/* winning number 19
19 your guess is right
17 too low
20 too high  */
// below code will give output in string

// let winningNumber = 19;
// let userGuess = prompt("Guess a number");
// console.log(typeof userGuess, userGuess);

//to get the value in number add + before prompt


// let winningNumber = 19;
// let userGuess = +prompt("Guess a number");
// console.log(typeof userGuess, userGuess);

//to expand the user output in if else

let winningNumber = 19;
let userGuess = +prompt("Guess a number");
console.log(typeof userGuess, userGuess);

if (userGuess === winningNumber) {
    console.log("your Guess is right");
} else {
    if (userGuess < winningNumber) {
        console.log("too low!!!");
    } else {
        console.log("too high!!!");
    }
}