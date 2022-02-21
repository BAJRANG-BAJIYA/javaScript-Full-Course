// // Function 
// // simple function

function singHappyBirthday() {
    console.log("happy birthday to you.....");
    console.log("happy happy birthday to you...");
}
singHappyBirthday();

// function for calculation

function sumOfThreeNumbers(number1, number2, number3) {
    return (number1 + number2 + number3)
}
let totalSum = sumOfThreeNumbers(2, 3, 4);
console.log(totalSum);

// // ODD or EVEN Function
// // is EVEN
// // input : 1 number
// // output :true orfalse

function isEven(number) {
    if (number % 2 === 0) {
        return true;
    }
    return false;
}
console.log(isEven(3));

// // function 
// // input string
// // output firstcharacter

function firstChar(anyString) {
    return anyString[0];
}
console.log(firstChar("tyu"));

// //function 
// // input Array, target (number)
// // output index of target if target is present in the array

//very important
function findTarget(array, target) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === target) {
            return i;
        }
    }
    return -1;
}
const myArray = [4, 7, 5, 9, 1, 5];
const ans = findTarget(myArray, 6);
console.log(ans);