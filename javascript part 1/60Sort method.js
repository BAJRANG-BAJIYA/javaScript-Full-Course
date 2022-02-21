// sort method
//sort method sort an array alphabetically
// the reverse method reverses the element in an array
//you can use it to sort an array in descending order
//by default the sort functon sorts values as string
//this works well for strings (apple comes before banana )
//however if numbers are sorted as strings ,25 is bigger than 100 because 2 is bigger than 1
//because of this ,the sort method will produce incorrect result when sorting numbers
// you can fix this by providing a compare function
//arr.sort(a,b)=>return a-b;



//ASCI Value
// Char : asci value

// //for low to high values

// const products =[
//     {productId: 1, productName: "moblie", price: 12000},
//     {productId: 2, productName: "laptop", price: 22000},
//     {productId: 3, productName: "iphone", price: 75000},
//     {productId: 4, productName: "tab", price: 5000},
//     {productId: 5, productName: "HDTV", price: 35000},
// ]
// const lowToHigh = products.slice(0).sort((a,b)=>{
//     return a.price-b.price;
// }) 
// console.log(lowToHigh);

// // high to low

const products = [
    { productId: 1, productName: "moblie", price: 12000 },
    { productId: 2, productName: "laptop", price: 22000 },
    { productId: 3, productName: "iphone", price: 75000 },
    { productId: 4, productName: "tab", price: 5000 },
    { productId: 5, productName: "HDTV", price: 35000 },
]
const highToLow = products.sort((a, b) => {
    return b.price - a.price;
})
console.log(highToLow);


// with slice in sort method

// const products =[
//     {productId: 1, productName: "moblie", price: 12000},
//     {productId: 2, productName: "laptop", price: 22000},
//     {productId: 3, productName: "iphone", price: 75000},
//     {productId: 4, productName: "tab", price: 5000},
//     {productId: 5, productName: "HDTV", price: 35000},
// ]
const highToLows = products.slice(0).sort((a, b) => {
    return b.price - a.price;
})
console.log(highToLows);