//primitive vs reference data types 
// primitive types
let num1 = 6
let num2 = num1;
console.log("value of num1 is", num1);
console.log("value of num2 is", num2);
num1++;
console.log("after incrementing num1");
console.log("value of num1 is", num1);
console.log("value of num2 is", num2);


// reference data types
//array is one of the referencfe types

let array1 = ["item1", "item2"];
let array2 = array1;
console.log("array1", array1);
console.log("array2", array2);
array1.push("item3");
console.log("after pushing element to array1");
console.log("array1", array1);
console.log("array2", array2); // op-->array1 and array2 will get the additional value item3


//NOTE regarding above equation
//primitive values are stored in stack due to values are 
//smaller as compared to reference data types

//reference data type values are stores in HEAP and there address is alocated to stack