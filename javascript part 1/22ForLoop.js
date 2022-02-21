// intro to for loop 
// print 0 to 9

for (let i = 0; i <= 9; i++) {
    console.log(i);
}

// // since i is declared inside the loop so it will not show its next value outside the loop
console.log("value of i is", i); // here it shows the error as it is not defined



//if we use use var instead of let then it will show the result outside the loop

for (var i = 0; i <= 9; i++) {
    console.log(i);
}
console.log("value of i is", i); //we used the var so it shows the value outside the loop