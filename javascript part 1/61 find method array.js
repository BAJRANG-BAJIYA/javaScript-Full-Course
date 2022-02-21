// find method 
// the find method returns the values of the first elements that passes a test
//the find method executes a function for each array element
// the find method returns undefiened if no element are found 
//the find method does not executes the function for empty element
// the find method does not change the original array




// const myArray = ["hello", "cat", "dog", "fish", "lion"];

// function isLength3(String) {
//     return String.length === 3;
// }
// const ans = isLength3("dog");
// console.log(ans);

// with find method 

// const myArray = ["hello", "cat", "dog", "fish", "lion"];

// function isLength3(String) {
//     return String.length === 3;
// }
// const ans = myArray.find(isLength3);
// console.log(ans);

// with as an arrow function and in find method

const myArray = ["hello", "cat", "dogs", "fish", "lion"];

const ans = myArray.find((string) => string.length === 3);
console.log(ans);

// find method realistic use

const users = [
    { userId: 1, userName: "bajrang" },
    { userId: 2, userName: "nisha" },
    { userId: 3, userName: "reyansh" },
    { userId: 4, userName: "gopal" },
    { userId: 5, userName: "ram" },
    { userId: 6, userName: "chiku" },
]
const finalOutput = users.find((user) => user.userId === 3);
console.log(finalOutput);