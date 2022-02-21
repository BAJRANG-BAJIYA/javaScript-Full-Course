// same method in subclass

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
    eat() {
        return `Modified eat: ${this.name} is eating`;
    }

    run() {
        return `${this.name} is running at  ${this.speed}Kmpl`;
    }
}

const tommy = new Dog("tommy", 2, 45);
console.log(tommy);
console.log(tommy.run());
console.log(tommy.eat());

// HERE THERE IS TWO EAT KEY IN BOTH SUB AND PARENT CLASS
// THE SUB CLASS FIRST LOOK IN ITS CONSTRUCTOR FOR THE KEY 
// IF IT FOUND THEN IT WILL PRINT IT OTHERWISE LOOK IT IN THE PARENT CLASS
// IF BOTH HAVE THE KEY THEN IT WILL CHOOSE ITS OWN (SUBCLASS)KEY