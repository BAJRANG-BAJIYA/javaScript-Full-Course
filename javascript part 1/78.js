// we will call method outof the main object

const userMethods = {
    about: function() {
        return `${this.firstName} is ${this.age} years old.`;
    },
    is18: function() {
        return this.age >= 18;
    }
}

function createUser(firstName, lastName, age, email, address) {
    const user = {};
    user.firstName = firstName;
    user.lastName = lastName;
    user.age = age;
    user.email = email;
    user.address = address;
    user.about = userMethods.about; /*this is reference(address) of the function*/
    user.is18 = userMethods.is18; /*this is reference(address) of the function*/

    return user;
}
const user1 = createUser('bajrang', 'bajiya', 27, 'bbajiya007@gmail.com', 'nanded');
const user2 = createUser('reyansh', 'baji', 1, 'bajiya7@gmail.com', 'nanded');
const user3 = createUser('nish', 'bajiya', 26, 'bbajiya07@gmail.com', 'nandeds');


console.log(user1.about());
console.log(user2.about());

// to improve this code