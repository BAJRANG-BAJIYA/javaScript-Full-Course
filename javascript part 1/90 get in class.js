// // getter and setter in class

// class person {
//     constructor(firstName, lastName, age) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.age = age;
//     }
//     fullName() {
//         return `${this.firstName} ${this.lastName}`
//     }
// }
// const person1 = new person("bajrang", "bajiya", 27);
// console.log(person1.fullName());

// here for the func fullname we have to add () in in console.log
// otherwise it will show the full function

// // to use it as property and without using ()
// // write get before fullname()

// class person {
//     constructor(firstName, lastName, age) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.age = age;
//     }
//     get fullName() {
//         return `${this.firstName} ${this.lastName}`
//     }
// }
// const person1 = new person("bajrang", "bajiya", 27);
// console.log(person1.fullName);



// // using SetName

class person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    get fullName() {
        return `${this.firstName} ${this.lastName}`
    }
    setName(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;

    }
}
const person1 = new person("bajrang", "bajiya", 27);

console.log(person1.firstName);
console.log(person1.lastName);
person1.setName("reyansh", "choudhary");
console.log(person1.firstName);
console.log(person1.lastName);

// // by using set we changed the values