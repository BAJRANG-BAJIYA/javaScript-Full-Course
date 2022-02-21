//filter function
//the filter method creates a new array filled with elements that pass a test provided by a function/callback function
//the filter method does not execute the function for empty elements
//the filter method does not change the original array


// const numbers = [2, 6, 7, 1, 8, 3, 5];
// const isEven = function(number) {
//     return number % 2 === 0;
// }

// const finalNumber = numbers.filter(isEven);
// console.log(finalNumber);

// 

const numbers = [2, 6, 7, 1, 8, 3, 5];
const isOdd = function(number) {
    return number % 2 === 1;
}

const finalNumber = numbers.filter(isOdd);
console.log(finalNumber);

//
// const numbers =[2,6,7,1,8,3,5,6];
// const evenNumber= numbers.filter((number)=>{
//     return number % 2 === 0;
// });
// console.log(evenNumber);