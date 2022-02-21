// objects inside arrays\ 
// very usefull in real world application

const users = [
    { userId: 1, firstName: "bajrang", age: 28, gender: "male" },
    { userId: 2, firstName: "gopal", age: 26, gender: "male" },
    { userId: 3, firstName: "nisha", age: 26, gender: "female" }
]
for (user of users) {
    console.log(user) // by using (user.firstName) we get all user name 
}