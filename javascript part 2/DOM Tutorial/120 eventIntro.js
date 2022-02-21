// intro to events
// click 
// event add karne ke 3 tarike hai 
// 1.) in the html which is old method

// 2)
// const btn = document.querySelector(".btn-headline");

// 3) mostly used
// method --- addEventListener
// function clickMe(){
//     console.log("you clicked me !!!!!");
// }

// btn.addEventListener("click", function(){
//     console.log("you clicked me !!!!");
// });


btn.addEventListener("click", () => {
    console.log("arrow function !!!")
});