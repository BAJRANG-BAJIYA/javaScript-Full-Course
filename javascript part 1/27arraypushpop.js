// array push pop 

// array shift unshift

// let fruits = ["apple", "mango", "grapes"];
// console.log(fruits);

//push

// fruits.push("banana");
// console.log(fruits);
//oputput--> apple,mango,grapes,banana 

// remove a fruit from list by pop

// let fruits = ["apple", "mango", "grapes", "kiwi"];
// console.log(fruits);
// let poppedFruit = fruits.pop();
// console.log(fruits); // output-->[apple,mango,grapes]

//to return the poped value
// let poppedFruit = fruits.pop();
// console.log(fruits);
// console.log("popped fruits is", poppedFruit); //output-> popped fruits is grapes

//UNSHIFT to add object from start
// let fruits = ["apple", "mango", "grapes"];
// console.log(fruits);
// fruits.unshift("banana");
// console.log(fruits);

//SHIFT to remove object
let fruits = ["apple", "mango", "grapes"];
console.log(fruits);
let removedFruit = fruits.shift();
console.log("removed fruit is", removedFruit); //--> apple obj removed from list
console.log(fruits);