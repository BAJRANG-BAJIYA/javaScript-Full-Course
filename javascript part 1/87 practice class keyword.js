// USE OF EXTENDS KEYWORD IN CLASS

// class Animal {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     eat() {
//         return `${this.name} is eating`;
//     }

//     isSuperCute() {
//         return this.age >= 1;
//     }
//     isCute() {
//         return true;
//     }
// }

// class Dog {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     eat() {
//         return `${this.name} is eating`;
//     }

//     isSuperCute() {
//         return this.age >= 1;
//     }
//     isCute() {
//         return true;
//     }
// }
// const tommy = new Dog("tommy", 3);
// console.log(tommy.isCute());

// // INSTEAD OF WRITING REPETING CODES WE CAN USE EXTEND
// // 

class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    eat() {
        return `${this.name} is eating`;
    }

    isSuperCute() {
        return this.age >= 1;
    }
    isCute() {
        return true;
    }
}
class Dog extends Animal {

}
const tommy = new Dog("tommy", 3);
console.log(tommy.isCute());

// here the animal is parent/base class
// were Dog is sub/derived class