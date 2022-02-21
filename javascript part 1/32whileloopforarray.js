// while loop in array

// const fruits = ["apple", "mango", "grapes"];
// let i = 0;
// while (i < fruits.length) {
//     console.log(fruits[i].toLocaleUpperCase());
//     i++;
// }

//  add another array with no value and use push

const fruits = ["apple", "mango", "grapes"];
const fruits2 = [];
let i = 0;
while (i < fruits.length) {
    fruits2.push(fruits[i].toLocaleUpperCase());
    i++;
}
console.log(fruits2);
console.log(typeof fruits2);