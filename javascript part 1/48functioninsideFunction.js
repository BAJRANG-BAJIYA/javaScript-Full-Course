//function inside functions

function app() {
    const myFunc = () => {
        console.log("hello from myFunc")
    }

    const addTwo = (num1, num2) => {
        return num1 + num2;
    }
    const mul = (num1, num2) => num1 * num2;
    console.log("inside the app");
    myFunc();
    console.log(mul(3, 5));
    console.log(addTwo(3, 5));
}
app();