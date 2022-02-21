// in jasvascript  function==>function + object
// it work as objects as well

// function hello() {
//     console.log("hello world")
// }
// console.log(hello.name); /* here name is used to know the name of function */

// we can add our own properties like

// hello.myOwnproperty = "very unique value";
// console.log(hello.myOwnproperty);

// name property --> tells function name
// function provides more usefull properties
// function gives us free space in the form of prototype object
// {}

// console.log(hello.prototype); /* it gives the consatructor object*/

// only function provide  prototype property
// to prove this

// if (hello.prototype) {
//     console.log('prototype is present');
// } else {
//     console.log("prototype not present");
// }
// here the function output is-->prototype is present

// now try same with object

// const hello = { key1: "value1" }

// if (hello.prototype) {
//     console.log('prototype is present');
// } else {
//     console.log("prototype not present");
// }

// here we used object insted of function and the output
// is ---> prototype not present
// lets add some prototype in the function

function hello() {
    console.log("hello world")
}

hello.prototype.abc = "abc";
hello.prototype.xy = "xyz";
hello.prototype.sing = function() {
    return 'sare gama padha nisa';
}
console.log(hello.prototype);
console.log(hello.prototype.sing());
// // in this output we can see the added prototype objects or add new function inside in the hello function 
// // we can create connection betn proto and prototype
// // we can add function related key value pair










//