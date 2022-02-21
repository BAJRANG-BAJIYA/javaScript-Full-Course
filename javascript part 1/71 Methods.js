// methods
// function inside object is called method 

// const person = {
//     firstName: 'bajrang',
//     age:28,
//     about:  function(){
//     console.log(`name of the person  is ${this.firstName} and age is ${this.age}`)}
// }
// person.about();

// //here the about is the function inside the person object
// //without using "this" value we can not get the desired output

// this: it is the object which calls the function

// const person = {
//     firstName: 'bajrang',
//     age: 28,
//     about: function() {
//         console.log(this);
//     }
// }
// person.about();

// with detail explanation

function personInfo() {
    console.log(`person name is ${this.firstName} and age is ${this.age}`);
}
const person1 = {
    firstName: 'bajrang',
    age: 28,
    about: personInfo
}
const person2 = {
    firstName: 'nish',
    age: 26,
    about: personInfo
}
const person3 = {
    firstName: 'gopal',
    age: 26,
    about: personInfo
}

const person4 = {
    firstName: 'reyansh',
    age: 1,
    about: personInfo
}
person2.about();
person4.about();