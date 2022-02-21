//if 
//else if
//else if
//else

let tempInDegree;
let userInput = +prompt(tempInDegree);
if (userInput <= 0) {
    console.log("extremely cold outside");
} else if (userInput < 16) {
    console.log("it is cold outside");
} else if (userInput < 25) {
    console.log("wether is okay");
} else if (userInput < 35) {
    console.log("lets go for swim");
} else if (userInput < 45) {
    console.log("turn on ac");
} else {
    console.log("its too hot outside!!!");
}