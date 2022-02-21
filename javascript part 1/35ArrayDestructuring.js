// Array Destructuring

//for normal style

// const myArray = ["value1", "value2", "value3", "value4"];
// let myvar1 = myArray[0];
// let myvar2 = myArray[1];
// console.log("value of the var1 is", myvar1);
// console.log("value of the var2 is", myvar2);

// with destructuring types

// const myArray = ["value1", "value2", "value3", "value4"];
// let [myvar1, myvar2] = myArray;
// console.log("value of var1 is", myvar1);
// console.log("value of var2 is", myvar2);


// distructuring with ...

const myArray = ["value1", "value2", "value3", "value4"];
let [myvar1, myvar2, ...myNewArray] = myArray; //with using ... the remaining values will assinged to the new variable myNewArray
console.log("value of var1 is", myvar1);
console.log("value of var2 is", myvar2);
console.log(myNewArray);