// // sets (it is iterable)
// //store data
// //sets also have its own method
// //no index based access
// // order is not guranteed
// // unique items only (no dulpicates allowed)


// const numbers = new Set([1, 2, 1, 3]);
// console.log(numbers);


// // with string


// const numbers = new Set("abcd");
// console.log(numbers);



// const numbers = new Set();
// numbers.add(1);
// numbers.add(2);
// numbers.add(4);
// numbers.add(2);
// numbers.add('item1');
// numbers.add('item1');
// console.log(numbers);

// // we can aad duplicate values like below example
// // since the memory location of both the array is different
// // the duplicates printed

const items = ['item1', 'item2', 'item3']
const numbers = new Set();
numbers.add(1);
numbers.add(2);
numbers.add(4);
numbers.add(["item1", "item2"]);
numbers.add(["item1", "item2"]);
numbers.add(items);
console.log(numbers);


// // use of sets
// use it when you know there is only  unique values present

// practical use example

const myArray = [1, 2, 3, 4, 5, 6, 4, 3, 7, 2]
const uniqueElements = new Set(myArray);
console.log(uniqueElements)