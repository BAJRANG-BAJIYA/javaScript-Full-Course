//function returniung function 
//this are highr order functions

// function myFunc() {
//     function hello() {
//         console.log("hello friends")
//     }
//     return hello;
// }
// const ans = myFunc();
// ans();



//

function myFunc() {
    function hello() {
        return "hello friends";
    }
    return hello;
}
const ans = myFunc();
console.log(ans());

// //