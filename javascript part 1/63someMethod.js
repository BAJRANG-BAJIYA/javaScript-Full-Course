//some method 
// kya ek bhi number esa hai jo even hai
// The some() method checks if any array elements pass a test (provided as a function).
// The some() method executes the function once for each array element:
// If the function returns true, some() returns true and stops.
// If the function returns false, some() returns false and stops.
// The some() method does not execute the function for empty array elements.
// The some() method does not change the original array.

//true

// const numbers = [2, 4, 6, 8, 9, 10];
// const ans = numbers.some((number) => number % 2 === 0);
// console.log(ans);


// realistic problem

const userCart = [
    { productId: 1, productName: "vivo", productPrice: 12000 },
    { productId: 2, productName: "redmi", productPrice: 15000 },
    { productId: 3, productName: "tab", productPrice: 22000 },
    { productId: 4, productName: "laptop", productPrice: 36000 },
    { productId: 5, productName: "fridge", productPrice: 12000 },
    { productId: 6, productName: "bed", productPrice: 11000 },
    { productId: 7, productName: "sofa", productPrice: 16000 },
]
const ans = userCart.some((cartItem) => cartItem.productPrice > 30000);
console.log(ans);