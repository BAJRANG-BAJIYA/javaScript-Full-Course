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

// for (let key in user1) {
//     console.log(key); /* here we get all key including prototype keys*/
// }
for (let key in user1) {
    if (user1.hasOwnProperty(key)) { /* here we get only function keys*/
        console.log(key);
    }
}