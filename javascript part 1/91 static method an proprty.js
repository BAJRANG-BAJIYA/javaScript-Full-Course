// static methods and properties

class person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    static classInfo() {
        return "this is person class";
    }
    get fullName() {
        return `${this.firstName} ${this.lastName}`
    }
    set fullName(fullName) {
        const [firstName, lastName] = fullName.split(" ");
        this.firstName = firstName;
        this.lastName = lastName;
    }
    eat() {
        return `${this.firstName} is eating`;
    }
    isSuperCute() {
        return this.age >= 1;
    }
    isCute() {
        return true;
    }
}
const person1 = new person("bajrang", "bajiya", 27);
console.log(person.classInfo());

// static methods can be directly called from parent class