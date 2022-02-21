// // arrow function 


// const singHappyBirthday = ()=>{
//     console.log("happy birthday to you.....");

// }
// singHappyBirthday();


// //

// const sumOfThreeNumbers = (number1, number2, number3)=>{
//     return(number1+number2+number3)
//     }
//     const ans =sumOfThreeNumbers(3,3,4);
//     console.log(ans);

// //

// const isEven =number=>{
//     if(number % 2 ===0){
//         return true;
//     }
//     return false;
// }
// console.log(isEven(4));

// // above equation can also be simplified more

// const isEven =number=> number % 2 ===0;
// console.log(isEven(4));


// //


const firstChar = (anyString) => {
    return anyString[2];
}
console.log(firstChar("sdHfchsd"));

// // above equation can also be simplified 

// const firstChar =(anyString)=> anyString[2];
// console.log(firstChar("sdHfchsd"));
// //

// const findTarget=(array, target)=>{
//     for(let i = 0; i<array.length; i++){
//         if(array[i]===target){
//             return i;
//         }
//     }
//     return -1;    
// }
// const myArray =[4,7,3,9,1,5];
// const ans = findTarget(myArray, 9);
// console.log(ans);