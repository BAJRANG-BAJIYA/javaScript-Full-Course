// arrow function 

// const user1 = {
//     firstName: "bajrang",
//     age: 28,
//     about: function() {
//         console.log(this.firstName, this.age);
//     }
// }
// user1.about();

// here we get the output 


// now with arrow function

// const user1 = {
//     firstName: "bajrang",
//     age: 28,
//     about: () => {
//         console.log(this.firstName, this.age);
//     }
// }
// user1.about();

// here the output will be underfined 
// arrow function does take (.this)function from
//  its surrounding 
// so the output will goes to undefined


const user1 = {
    firstName: "bajrang",
    age: 28,
    about: () => {
        console.log(firstName, age);
    }
}
user1.about(user1);