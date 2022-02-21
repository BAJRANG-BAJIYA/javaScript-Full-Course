//funcion expression
// var will set in the global as undefined  
// before executing code var will set as undefined in the memory

console.log(myfunction);

var myfunction = function() {
    console.log("this is my function")
}

console.log(myfunction);