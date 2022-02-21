// // new keyword

// function createUser(firstName, age) {
//     this.firstName = firstName;
//     this.age = age;
// }

// const user1 = new createUser("bajrang", 27);
// console.log(user1);

// new keyword
// // 1) empty object this{}
// //2) return this
// //3) function gives us an object of prototype
// // constructor function 

function CreateUser(firstName, lastName, age, email, address) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.email = email;
    this.address = address;
}
CreateUser.prototype.about = function() {
        return `${this.firstName} is ${this.age} years old.`;
    },
    CreateUser.prototype.is18 = function() {
        return this.age >= 18;
    },
    CreateUser.prototype.sing = function() {
        return 'tere mere milan ki ye raina';
    }

const user1 = new CreateUser('bajrang', 'bajiya', 27, 'bbajiya007@gmail.com', 'nanded');
const user2 = new CreateUser('reyansh', 'baji', 1, 'bajiya7@gmail.com', 'nanded');
const user3 = new CreateUser('nish', 'bajiya', 26, 'bbajiya07@gmail.com', 'nandeds');


console.log(user3);
console.log(user2.sing());





















//