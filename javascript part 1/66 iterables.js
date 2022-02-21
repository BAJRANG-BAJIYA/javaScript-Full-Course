// //iterebales
// //jispe ham for loop laga sake
// //String, array are iterables
// object is NOT iterable
// //below is the string example

// const firstName = "Harshit";
// for (let char of firstName) {
//     console.log(char);
// }

// //below is the array example

const items = ["item1", "item2", "item3"];
for (let item of items) {
    console.log(item);
}

// // below is the object example 

// const users = { 'key1': 'value1', 'key2': 'value2' }
// for (let user of users) {
//     console.log(user)
// }
// // object are not iterables so the error will show


// //array like object
// //jinke pass length property hoti hai
// //aur jinko hum index se access kar sakte hai

// example :--String

const firstName = "harshit";
console.log(firstName.length);
console.log(firstName[2]);

// //the string is behave like aray like object