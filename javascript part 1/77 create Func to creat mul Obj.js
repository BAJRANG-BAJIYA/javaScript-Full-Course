// create function to create multiple object 
//proto, prototype, class

const user = {
    firstName: "bajrang",
    lasName: "bajiya",
    email: "bbajiya007@gmail.com",
    age: 27,
    address: "house Number,colony,pincode,state",
    about: function() {
        return `${this.firstName} is ${this.age} years old.`;
    },
    is18: function() {
        return this.age >= 18;
    }
}
const aboutUser = user.about();
console.log(aboutUser);

// for multiple (thousends of user) of user this idea is not good 
// because it creates alot of repetation
//To overcome this problem

//1 function--> we have to create a function which takes the user input
// and give it in the form of (object) 
//2.) add key value pair in the object
//3.) return the object

// function createUser(firstName, lastName, age, email, address) {
//     const user = {};
//     user.firstName = firstName;
//     user.lastName = lastName;
//     user.age = age;
//     user.email = email;
//     user.address = address;
//     user.about = function() {
//         return `${this.firstName} is ${this.age} years old.`;
//     };
//     user.is18 = function() {
//         return this.age >= 18;
//     }
//     return user;
// }
// const user1 = createUser('bajrang', 'bajiya', 27, 'bbajiya007@gmail.com', 'nanded');
// console.log(user1);
// const is18 = user1.is18();
// const about = user1.about();
// console.log(about);


// this function also have alot of drawbacks
// to overcome those drawbacks
// view page78
// this is memory consuming function