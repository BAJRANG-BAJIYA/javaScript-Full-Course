//nested destructuring 


// const users = [
//     { userId: 1, firstName: "bajrang", age: 28, gender: "male" },
//     { userId: 2, firstName: "gopal", age: 26, gender: "male" },
//     { userId: 3, firstName: "nisha", age: 26, gender: "female" }
// ]
// const [user1, user2, user3] = users;
// console.log(user2);


//create perticular obj into variable
const users = [
    { userId: 1, firstName: "bajrang", age: 28, gender: "male" },
    { userId: 2, firstName: "gopal", age: 26, gender: "male" },
    { userId: 3, firstName: "nisha", age: 25, gender: "female" }
]
const [{ firstName: user1firstName, userId: newUserIdof1is }, , { age: user3age }] = users
console.log(user1firstName);
console.log(user3age);
console.log(newUserIdof1is);