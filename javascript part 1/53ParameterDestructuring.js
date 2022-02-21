//parameter destructuring 

//Object 
//react

// const person = {
//     firstName: "bajrang",
//     age: 28,
//     gender: "Male",
// }

// function details(obj) {
//     console.log(obj.firstName);
//     console.log(obj.age);
// }
// console.log(person);


///with destructuring

// const person = {
//     firstName: "bajrang",
//     age: 28,
//     gender: "Male",
//     city: "pune",
// }

// function details({ firstName, age }) {
//     console.log(firstName);
//     console.log(age);
// }
// details(person); // putput=bajrang ,28

//

const person = {
    firstName: "bajrang",
    age: 28,
    gender: "Male",
    city: "pune",
}

function details({ firstName, age, ...other }) {
    console.log(firstName);
    console.log(age);
    console.log(typeof other, other);
}
details(person); //output= bajrang,28, (male and pune in object)