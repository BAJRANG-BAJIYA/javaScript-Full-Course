// // use of prototype ike __proto__


function createUser(firstName, lastName, age, email, address) {
    const user = Object.create(CreateUser.prototype);
    user.firstName = firstName;
    user.lastName = lastName;
    user.age = age;
    user.email = email;
    user.address = address;
    return user;
}
createUser.prototype.about = function() {
        return `${this.firstName} is ${this.age} years old.`;
    },
    createUser.prototype.is18 = function() {
        return this.age >= 18;
    },
    createUser.prototype.sing = function() {
        return 'tere mere milan ki ye raina';
    }

const user1 = createUser('bajrang', 'bajiya', 27, 'bbajiya007@gmail.com', 'nanded');
const user2 = createUser('reyansh', 'baji', 1, 'bajiya7@gmail.com', 'nanded');
const user3 = createUser('nish', 'bajiya', 26, 'bbajiya07@gmail.com', 'nandeds');


console.log(user1);
console.log(user2.sing());

// // HERE WE USED THE PROTOTYPE INSTEAD OF __PROTO__
// // BUT THE WORK IS SAME AS PROTO