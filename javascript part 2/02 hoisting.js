// hoisting
//defn-->Hoisting is the default behavior of moving all 
//the declarations at the top of the scope before code execution

//Basically, it gives us an advantage that no matter where functions and variables are declared, 
// they are moved to the top of their scope regardless of whether their scope is global or local.



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