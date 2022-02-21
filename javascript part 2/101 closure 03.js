/// closure example 3

function func() {
    let counter = 0;
    return function() {
        if (counter < 1) {
            console.log("hi you called me");
            counter++;
        } else {
            console.log("mai already call ho chuka");
        }
    }
}
const myfunc = func();
myfunc();
myfunc();