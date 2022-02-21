// clone using object.assign

// const obj ={
//     key1: "value1",
//     key2: "value2"
// }
// const obj2 = {...obj};
// obj.key3 = "value3";
// console.log(obj);
// console.log(obj2);

// // here firt the obj is created and then cloined by obj2
// // to add the key value in obj we used the spread operator

const obj = {
    key1: "value1",
    key2: "value2"
}
const obj2 = Object.assign({}, obj);
obj.key3 = "value4";
console.log(obj);
console.log(obj2);

// this is also a way to assign