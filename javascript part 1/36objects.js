// objects 
// we use { } for the object
// const person = {name:"harshit",age:22}
//arrays are good but not sufficient for real world data

// objects store key value pair
// objects dont have index
// we can store arrays inside the objects se below prog

// const person = {
//     name: "bajrang",
//     age: 27,
//     hobbies: ["guitar", "sleeping", "listening music"] // this line is array 
// }
// console.log(typeof person);
// console.log(person);

//how to creat objects

//how to access data from objects -see below program

// const person = {
//     name:"bajrang",
//     age:  27,
//     hobbies:["guitar", "sleeping", "listening music"]
// }
// console.log(person.name); // we can access the data individually like this
// console.log(person.age);
// console.log(person.hobbies);



//how to add key value pair to objects

// const person = {
//     name: "bajrang",
//     age: 27,
//     hobbies: ["guitar", "sleeping", "listening music"]
// }
// console.log(person);
// person.gender = "male"; //here we added the key value pair in the object
// console.log(person);

// we can get the key value from  ["key name"]

const person = {
    name: "bajrang",
    age: 27,
    hobbies: ["guitar", "sleeping", "listening music"]
}
person.gender = "male"; //here we added the key value pair in the object
console.log(person["age"]); // herer we accessed the prticular key data