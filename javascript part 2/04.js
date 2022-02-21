// for Let variable

// console.log(firstName);
// let firstName = "bajrang";
// console.log(firstName);

//Uncaught ReferenceError: 
// Cannot access 'firstName' before initialization

// for const variable

console.log(firstName);
const firstName = "bajrang";
console.log(firstName);

//Uncaught ReferenceError: 
// Cannot access 'firstName' before initialization

// let and const ki hoisting hoti hai but wo uninitialized hai
// let and const TDZ hai
// TDZ--> temporal dead zone
//  the term to describe the state where variables are un-reachable.
//  They are in scope, but they aren't declared. The let and const variables 
// exist in the TDZ from the start of their enclosing scope until they are declared.

//Lexical scoping describes how the JavaScript engine uses the location of the variable 
// in the code to determine where that variable is available.
// A closure is a combination of a function and its ability to remember variables in the outer scope
























//