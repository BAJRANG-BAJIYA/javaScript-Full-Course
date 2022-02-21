//important array methods 

// forEach
// Map
// Filter 
// reduce 

// const numbers = [4, 2, 5, 6];

// function multiPlyBy2(number, index) {
//     console.log("index is", index);
//     console.log(`${number}*2 = ${number*2}`);
// }
// for (let i = 0; i < numbers.length; i++) {
//     multiPlyBy2(numbers[i], i);
// }

// forEach array method

// const numbers = [4, 2, 5, 7];

// function myFunc(number, index) {
//     console.log("index is", index);
//     console.log(`index = ${index} number = ${number}`);
// }
// numbers.forEach(myFunc);


// const numbers = [4, 2, 5, 6];

// function myFunc(number) {
//     console.log(`number = ${number}`);

// }
// numbers.forEach(myFunc);

// we can further simplfy the program using forEach

// const numbers = [4, 2, 5, 6];
// numbers.forEach(function(number, index) {
//         console.log(`index = ${index} number = ${number}`);

//     })

const fruits = ["apple", "orange", "mango", "banana", "kiwi"];
fruits.forEach(function(name, index) {
    console.log(`fruit name is ${name} with index number ${index}`)
});

//
const users = [
    { firstName: "bajrang", age: 28 },
    { firstName: "nisha", age: 26 },
    { firstName: "reyansh", age: 1 }
]
users.forEach(function(user, index) {
    console.log(user.firstName, index);
});

// above program with arrow function in forEach method

// const users = [
//     { firstName: "bajrang", age: 28 },
//     { firstName: "nisha", age: 26 },
//     { firstName: "reyansh", age: 1 }
// ]
// users.forEach((user, index) => {
//     console.log(user.firstName, index);
// });

//