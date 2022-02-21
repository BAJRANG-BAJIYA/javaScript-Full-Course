// for loop in array 

// let fruits = ["apple", "mango", "grapes", "banana"];

// console.log(fruits.length);
// console.log(fruits[3]);


let fruits = ["apple", "mango", "grapes", "banana"];
let fruits2 = [];
for (let i = 0; i < fruits.length; i++) {
    fruits2.push(fruits[i].toUpperCase());
    // console.log(fruits[i].toUpperCase());

    console.log(fruits2);

}
console.log(typeof fruits);