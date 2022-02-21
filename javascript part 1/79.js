// problem with this program is that there will be alot of function 
// to be writeen n all those have to get aaded to the user.function
// if we forget to add key values then there will be problem
// to overcome this we have to find other solution  for below code

const userMethods = {
    about: function() {
        return `${this.firstName} is ${this.age} years old.`;
    },
    is18: function() {
        return this.age >= 18;
    },
    sing: function() {
        return 'tere mere milan ki ye raina';
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
    user.sing = userMethods.sing;
    return user;
}
const user1 = createUser('bajrang', 'bajiya', 27, 'bbajiya007@gmail.com', 'nanded');
const user2 = createUser('reyansh', 'baji', 1, 'bajiya7@gmail.com', 'nanded');
const user3 = createUser('nish', 'bajiya', 26, 'bbajiya07@gmail.com', 'nandeds');


console.log(user1.about());
console.log(user2.sing());