//block scope vs function scope 


// let and const are block scope
// var is function scope

// {
//     const firstName = "bajrang";
// }
// console.log(firstName); // since let and const are block scope we can not access it outside the block{} 
// it means the error shows that the value is not defined
// 

// {
//     let firstName = "bajrang";
//     console.log(firstName); // here we get the output since we are accessing the value inside the block
// }

// //after using var variable
// {
//     var firstName = "bajrang";
// }
// console.log(firstName); // here we can access the value outside the box since we used the var 


// below example is with two blocks with same variable 
// name of firstName but diff assigned value but the out put is diff

{
    let firstName = "bajrang";
    console.log(firstName);
} {
    let firstName = "reyansh";
    console.log(firstName);
} // output is bajrang and reyansh