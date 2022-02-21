// every method 

const numbers = [2, 4, 6, 8, 10]
const ans = numbers.every((number) => number % 2 === 0);
console.log(ans);

// callback function ---> true/false (boolean)
// every function ---> true/false (boolean)


// /realistic example


const userCart = [
    { productId: 1, productName: "vivo", productPrice: 12000 },
    { productId: 2, productName: "redmi", productPrice: 15000 },
    { productId: 3, productName: "tab", productPrice: 22000 },
    { productId: 4, productName: "laptop", productPrice: 32000 },
    { productId: 5, productName: "fridge", productPrice: 12000 },
    { productId: 6, productName: "bed", productPrice: 11000 },
    { productId: 7, productName: "sofa", productPrice: 16000 },
]
const ansr = userCart.every((cartItem) => cartItem.productPrice < 30000)
console.log(ansr);