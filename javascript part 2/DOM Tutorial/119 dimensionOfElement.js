// how to get the dimension of element
// height width 


const sectionTodo = document.querySelector(".section-todo");
const info = sectionTodo.getBoundingClientRect();
console.log(info);

// for only height
// const info = sectionTodo.getBoundingClientRect().height;

//for width
//const info = sectionTodo.getBoundingClientRect().width;

// for top
// const info = sectionTodo.getBoundingClientRect().top;

//we can also do this with right left bottom