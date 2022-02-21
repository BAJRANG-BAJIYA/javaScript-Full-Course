// //spread operator in objects 


const obj1 = {
    key1: "value1",
    key2: "value2"
}
const obj2 = {
    key3: "value3",
    key4: "value4",
}
const newObj = {...obj1, ...obj2, key5: "value5" };
console.log(newObj);

// // how to spread the string values via spread operator


const object1 = {
    key1: [...
        "abcdefghijklmnopqrstuvwxyz"
    ],
}

console.log(object1);