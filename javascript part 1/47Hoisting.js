//Hoisting 

// hello();

// function hello() {
//     console.log("hello world")
// }

// if we use the const instead of the function value it will show the error


// hello();
const hello = function() { // we can get the output incase of function expression
    console.log("hello world"); // in this case error show that we can not access the hello before initialization
}


console.log(hello);
var hello = "hello world"; // if we use the var then output is undefined