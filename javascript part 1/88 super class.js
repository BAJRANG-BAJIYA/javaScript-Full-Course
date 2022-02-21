//super class
// if we have to add some key in sub class which is not present in parent class

// to add the speed of dog we use super in the sub class

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
    constructor(name, age, speed) {
        super(name, age);
        this.speed = speed;
    }
    run() {
        return `${this.name} is running at  ${this.speed}Kmpl`;
    }
}

const tommy = new Dog("tommy", 2, 45);
console.log(tommy);
console.log(tommy.run());