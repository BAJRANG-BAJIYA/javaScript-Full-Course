// //map method
// //it is very usefull in reactjs
// // it is ECMAScript5 feature
// // map() creates the new array from calling a function for every array element
// //map() calls a function once for each element in  an array
// //does not execute the function for empty elements
// //map()does not change the original array
// //map:returns an array of pieces of information from the original array 


// const numbers = [3, 6, 4, 8, 3] //array variable

// const square = function(number) {
//     return number * number;
// }
// const squareNumber = numbers.map(square);
// console.log(squareNumber);


// //another method

// const numbers = [3, 6, 4, 8, 13]

// const squareNumber = numbers.map((number) => {
//     return number * number;
// });
// console.log(squareNumber);


// //again another method with arrow function

// const numbers = [3, 6, 4, 8, 3]

// const squareNumber = numbers.map((number) => {
//     return number * number;
// });
// console.log(squareNumber);

// //same with adding index in numbers

// const numbers = [3, 6, 4, 8, 3]

// const squareNumber = numbers.map((number, index) => {
//     return `index:${index}, ${number * number}`;
// });
// console.log(squareNumber);

// //

const users = [
    { firstName: "bajrang", age: 28 },
    { firstName: "nisha", age: 26 },
    { firstName: "reyansh", age: 1 }
]
const userDetails = users.map(function(user) {
    return user.firstName;
})
console.log(userDetails);

// with arrow function

// const users=[
//     {firstName: "bajrang", age: 28},
//     {firstName: "nisha", age: 26},
//     {firstName: "reyansh",age: 1}
// ]
// const userDetails =users.map((user)=>{
//     return user.firstName;
// })
// console.log(userDetails);