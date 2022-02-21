// for in loop in array

// const fruits = ["apple", "mango", "grapes"];
// const fruits2 = [];


// for (let index in fruits) {
//     console.log(index);
// }

//OR

// const fruits = ["apple", "mango", "grapes"];
// const fruits2 = [];


// for (let index in fruits) {
//     console.log(fruits[index].toUpperCase());
// }

// OR

const fruits = ["apple", "mango", "grapes"];
const fruits2 = [];


for (let index in fruits) {
    fruits2.push(fruits[index].toUpperCase());
}
console.log(fruits2);