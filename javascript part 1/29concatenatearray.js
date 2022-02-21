// how to clone arrays

//how to concatenate two arrays
//there are diff ways is slice method
//1) slice()
//2) [].concate
//3) [...] <--spread


// let array1 = ["item1", "item2", "item3", "item4"];
// let array2 = array1.slice(0);
// array1.push("itemm5");

// console.log(array1 === array2)
// console.log(array1);
// console.log(array2);


//othere way to clone is concat method

// let array1 = ["item1", "item2", "item3", "item4"];
// let array2 = [].concat(array1);
// array1.push("itemm5");

// console.log(array1 === array2)
// console.log(array1);
// console.log(array2);

// other way is spread operator way

// let array1 = ["item1", "item2", "item3", "item4"];
// let array2 = [...array1];
// array1.push("itemm5");

// console.log(array1 === array2)
// console.log(array1);
// console.log(array2);

//add extra elementsin clone array with conact

// let array1 = ["item1", "item2"];
// let array2 = array1.slice(0).concat(["item4", "item5", "item6"]);
// array1.push("itemm3");

// console.log(array1 === array2)
// console.log(array1);
// console.log(array2);


//add extra elements using spread operator

let array1 = ["item1", "item2"];
let oneMoreArray = ["item 3", "item4"]
let array2 = [...array1, ...oneMoreArray];
array1.push("itemm3");
console.log(array1 === array2);
console.log(array1);
console.log(array2);