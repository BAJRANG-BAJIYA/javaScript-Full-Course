// call in function or object 

// const user1 = {
//     firstName: "bajrang",
//     age: 28,
//     gender: "male",
//     about: function() {
//         console.log(this.firstName, this.age, this.gender)
//     }
// }
// const user2 = {
//     firstName: "reyansh",
//     age: 1,
//     gender: "male",
// }
// const user3 = {
//     firstName: "nisha",
//     age: 26,
//     gender: "female",
// }

// user1.about.call(user3);

// // in line 22 with the help of "call" we get the output of user2 or user 3 with about function 
// // which is declared only in user1
// // user.about.call()-> we get undefined undefined value
// // for user1 data we can use below line
// // user1.about();


// if we add key inside the function like hobby and favMusic

// const user1 = {
//     firstName: "bajrang",
//     age: 28,
//     gender: "male",
//     about: function(hobby, favMusician) {
//         console.log(this.firstName, this.age, this.gender, hobby, favMusician)
//     }

// }
// const user2 = {
//     firstName: "reyansh",
//     age: 1,
//     gender: "male",
// }
// const user3 = {
//     firstName: "nisha",
//     age: 26,
//     gender: "female",
// }

// user1.about.call(user3, "guitar", "shreya ghoshal");


// // or we can add the function outside

// function about(hobby, favMusician) {
//     console.log(this.firstName, this.age, this.gender, hobby, favMusician)
// }


// const user1 = {
//     firstName: "bajrang",
//     age: 28,
//     gender: "male",

// }
// const user2 = {
//     firstName: "reyansh",
//     age: 1,
//     gender: "male",
// }
// const user3 = {
//     firstName: "nisha",
//     age: 26,
//     gender: "female",
// }

// about.call(user1, "guitar", "AR Rehman");


// // Apply
// // apply is similar to the call
// // after using apply we can use the arguments which we have to add with the data into array
// // ["guitar", "AR Rehman"] <--after using apply insted of call


// function about(hobby, favMusician) {
//     console.log(this.firstName, this.age, this.gender, hobby, favMusician)
// }


// const user1 = {
//     firstName: "bajrang",
//     age: 28,
//     gender: "male",

// }
// const user2 = {
//     firstName: "reyansh",
//     age: 1,
//     gender: "male",
// }
// const user3 = {
//     firstName: "nisha",
//     age: 26,
//     gender: "female",
// }

// about.apply(user2, ["piano", "AR Rehman"]);


// // bind
// // bind store the data into one variable 
// // we can call this variable later like below example

function about(hobby, favMusician) {
    console.log(this.firstName, this.age, this.gender, hobby, favMusician)
}


const user1 = {
    firstName: "bajrang",
    age: 28,
    gender: "male",

}
const user2 = {
    firstName: "reyansh",
    age: 1,
    gender: "male",
}
const user3 = {
    firstName: "nisha",
    age: 26,
    gender: "female",
}
const myFunc = about.bind(user2, "cricket", "Lata M")
myFunc();