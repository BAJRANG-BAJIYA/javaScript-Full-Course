// // reduce method in array 
// it is ECMAScript 6 method
//the reduce method executes a reducer function for array element
//the reduce method return a single value:the functions accumulated result
// the reduce method does not execute the function for empty elements
// the reduce method does not change the original array
// arr.reduce(acc,item)=>acc+item);



const numbers = [1, 2, 3, 4, 5, 10];

// // //Aim: sum of all the numbers in array

const sum = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue
});
console.log(sum);

// // accumulator  currentValue,  return
// // 1                2           3 
// // 3                3           6                                  
// // 6                4           10
// // 10               5          15
// // 15               10          25

// //another reduce method

const userCart = [
    { productId: 1, productName: "moblie", price: 12000 },
    { productId: 2, productName: "laptop", price: 22000 },
    { productId: 3, productName: "tv", price: 15000 },
]
const totalAmount = userCart.reduce((totalPrice, currentProduct) => {
    return totalPrice + currentProduct.price;
}, 0)
console.log(totalAmount);