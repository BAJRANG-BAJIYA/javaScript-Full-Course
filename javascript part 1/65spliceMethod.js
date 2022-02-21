//splice method
// (start, delete, insert)
// The splice() method adds and/or removes array elements.
// The splice() method overwrites the original array.


//for delete

// const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const deletedItem = myArray.splice(2, 2);
// console.log(myArray);
// console.log(deletedItem);

//insert

const nayaArray = ['item1', 'item2', 'item3'];
nayaArray.splice(1, 0, 'inserted item1');
console.log(nayaArray);


// / insert and delete

// const nayaArray = ['item1', 'item2', 'item3'];
// nayaArray.splice(1, 1, 'inserted item1', 'inserteditem2');
// console.log(nayaArray);