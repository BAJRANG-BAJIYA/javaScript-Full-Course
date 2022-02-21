// difference between DOT and BRACKET notation

// const person = {
//     name: "bajrang",
//     age: 27,
//     "few hobbies": ["guitar", "sleeping", "listening music"]
// }
// console.log(person["few hobbies"]); // instead of DOT we used bracket for more than single word variable like "few hobbies"
// console.log(person.name); // here single key is there which is name so we use the DOT after console.log() operator

// adding another var name in the object
const key = "email";
const person = {
    name: "bajrang",
    age: 27,
    "few hobbies": ["guitar", "sleeping", "listening music"]
}
person[key] = "bajrang.bajiya@gmail.com"; // we have to get the email value so we use [] braket without any ""  
console.log(person); // we get output with key=email