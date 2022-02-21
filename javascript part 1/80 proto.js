//              __proto__

// const obj1 = {
//     key1: "value1",
//     key2: "value2"
// }

// const obj2 = Object.create(obj1); //{} 
// line 8 is one type to create empty object

// obj2.key3 = "value3";
//obj2.key2="unique";
// console.log(obj2);

// __proto__
// official ecmascript doucumentation
// [[prototype]] is same as __proto__
// this is also called as chaining

//  but prototype is not same as [[prototype]]
// this 2 are different

// console.log(obj2.__proto__);

// so the 79 file will improved by __proto__



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
    const user = Object.create(userMethods);
    user.firstName = firstName;
    user.lastName = lastName;
    user.age = age;
    user.email = email;
    user.address = address;
    return user;
}
const user1 = createUser('bajrang', 'bajiya', 27, 'bbajiya007@gmail.com', 'nanded');
const user2 = createUser('reyansh', 'baji', 1, 'bajiya7@gmail.com', 'nanded');
const user3 = createUser('nish', 'bajiya', 26, 'bbajiya07@gmail.com', 'nandeds');


console.log(user1.about());
console.log(user2.sing());
console.log(user3);

// now the code is short and effective