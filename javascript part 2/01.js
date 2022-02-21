console.log(this);
console.log(window);
console.log(myfunction);
console.log(fullName);

function myfunction() {
    console.log("this is my function")
}

var firstName = "bajrang";
var lastName = "bajiya"
var fullName = firstName + " " + lastName;
console.log(fullName);

// //global scope contains following 



// firstname lastname fullname and function
// it is called as GEC -->global execution context
// it added in the stack

// CEP--> code execution phase