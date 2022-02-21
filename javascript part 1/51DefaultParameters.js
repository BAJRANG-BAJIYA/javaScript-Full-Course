// default parameters 

// normal program without default parameter

// function addTwo(a, b) {
//     if (typeof b === "undefined") {
//         b = 0;
//     }
//     return a + b;
// }
// console.log(addTwo(4, 5)); // output 9

// with default parameters

// function addTwo(a, b = 0) {
//     return a + b;
// }
// const ans = addTwo(4,6); // if we dont add the value of b then also we get the output
// console.log(ans);

function addTwo(a, b = 0) {
    return a + b;
}
const ans = addTwo(4, ); // we only added the value of a
console.log(ans);