//closure example 2


// function myFunction(power) {
//     return function(number) {
//         return number ** powe
//     }
// }
// const cube = myFunction(3);
// const ans = cube(2);
// console.log(ans);



function myFunction(power) {
    return function(number) {
        return number ** powe
    }
}
const square = myFunction(2);
const ans = square(2);
console.log(ans);


// to short the function by writing arrow function

const myFunction = (power) => {
    return (number) => {
        return number ** power
    }
}
const square = myFunction(2);
const ans = square(2);
console.log(ans);

// even shorter code is 

const myFunction = power => number => number ** power

const square = myFunction(2);
const ans = square(2);
console.log(ans);