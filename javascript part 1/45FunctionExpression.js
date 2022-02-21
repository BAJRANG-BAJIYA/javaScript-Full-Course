 // // function expression

 const singHappyBirthday = function singHappyBirthday() {
     console.log("happy birthday to you.....");

 }
 singHappyBirthday();

 //

 //  const sumOfThreeNumbers = function(number1, number2, number3) {
 //      return (number1 + number2 + number3)
 //  }
 //  const ans = sumOfThreeNumbers(2, 3, 4);
 //  console.log(ans);

 //

 const isEven = function(number) {
     if (number % 2 === 0) {
         return true;
     }
     return false;
 }
 console.log(isEven(5));

 //


 const firstChar = function(anyString) {
     return anyString[2];
 }
 console.log(firstChar("sdHfchsd"));




 const findTarget = function(array, target) {
     for (let i = 0; i < array.length; i++) {
         if (array[i] === target) {
             return i;
         }
     }
     return -1;
 }
 const myArray = [4, 7, 3, 9, 1, 5];
 const ans = findTarget(myArray, 9);
 console.log(ans);