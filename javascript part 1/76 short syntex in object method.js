//short syntex

// const user1 = {
//         firstName: "bajrang",
//         age: 28,
//         about: function() {
//             console.log(this.firstName, this.age);
//         }
//     }
// insted of doing this we can write like below

const user1 = {
    firstName: "bajrang",
    age: 28,
    about() {
        console.log(this.firstName, this.age);
    }
}
user1.about();