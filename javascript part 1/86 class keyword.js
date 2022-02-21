// class keyword
// class are fake


class CreateUser {
    constructor(firstName, lastName, age, email, address) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.email = email;
        this.address = address;
    }
    about() {
        return `${this.firstName} is ${this.age} years old.`;
    }
    is18() {
        return this.age >= 18;
    }
    sing() {
        return 'tere mere milan ki ye raina';
    }
}

const user1 = new CreateUser('bajrang', 'bajiya', 27, 'bbajiya007@gmail.com', 'nanded');
const user2 = new CreateUser('reyansh', 'baji', 1, 'bajiya7@gmail.com', 'nanded');
const user3 = new CreateUser('nish', 'bajiya', 26, 'bbajiya07@gmail.com', 'nandeds');

console.log(user1.firstName);
console.log(user3.is18());

console.log(Object.getPrototypeOf(user1));
// // we get all added prototypes from above command "getprototypeof"