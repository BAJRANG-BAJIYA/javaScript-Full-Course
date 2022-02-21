// //lexical function  

function myApp() {
    const myVar = "value1";

    function myFunc() {
        const myVar = "value"
        console.log("inside myfunc", myVar);
    }
    const myFunc2 = function() {}
    const myfunc3 = () => {}
    console.log(myVar);
    myFunc();
}
myApp();

// //