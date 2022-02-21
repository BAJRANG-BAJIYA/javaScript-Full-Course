// maps 
// prototype is map
//store data in ordered fashion

//store kay value pair(like object)
// duplicate keys are not allowed like objects

// difference betn maps and object

// object can only have string or symbol as key
// in maps you can use anything as key
// like array,  number , string
// order fashion is same 

//object literals
// key->string 
// key-symbol 

// const person = { firstName: "bajrang", age: 28, 1: "one" }
// console.log(person.firstName)
// console.log(person["firstName"]);
// console.log(person["1"]);
// for (let key in person) {
//     console.log(typeof key)
// }

//key pair value

// const person = new Map();
// person.set('firstname', 'bajrang');
// person.set('age', 7);
// person.set(1, 'one');
// console.log(person);
// for (let key of person.keys()) {
//     console.log(key, typeof key);
// }

// // destructuring using map
// const person = new Map();
// person.set('firstname', 'bajrang');
// person.set('age', 7);
// person.set(1, 'one');
// for (let [key, value] of person) {
//     console.log(key, value);
// }


// // array inside array of map 

// const person = new Map([
//     ['firstName', 'bajrang'],
//     ['age', 7],
//     ['qualification', 'graduation']
// ]);
// console.log(person);

// // adding additional values inside object using Map 

// const person1 = {
//     id: 1,
//     firstName: "bajrang"
// }
// const userInfo = new Map();
// userInfo.set(person1, { age: 28, gender: "male" });
// // console.log(userInfo) 
// console.log(person1.id);
// console.log(userInfo.get(person1).gender);
// console.log(userInfo.get(person1).age);


// 

const person1 = {
    id: 1,
    firstName: "bajrang"
}
const person2 = {
    id: 2,
    firstName: "nisha"
}

const userInfo = new Map();
userInfo.set(person1, { age: 28, gender: "male" });
userInfo.set(person2, { age: 26, gender: "female" });
console.log(userInfo) //
console.log(person1.id);
console.log(userInfo.get(person1).gender);
console.log(userInfo.get(person1).age);
console.log(person2.id);
console.log(userInfo.get(person2).gender);
console.log(userInfo.get(person2).age);