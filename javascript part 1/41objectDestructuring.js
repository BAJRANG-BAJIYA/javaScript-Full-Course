// object destructuring  

//without destructuring

// const band = {
//     bandName: "led zapeline",
//     famousSong: "stairways to heaven",
// };
// const var1 = band.bandName;
// const var2 = band.famousSong;
// console.log(var1, var2);

// with using destructuring method

// const band = {
//     bandName: "tere sang yara",
//     famousSong: "stairways to heaven",
//     year: 1968,
//     anotherFamousSong: "kashmir",

// };
// const { bandName, famousSong } = band; // with this line we get two diff variable in one line
// console.log(bandName);
// console.log(band);

// this one also same to declare remaining item in the variable

const band = {
    bandName: "led zapeline",
    famousSong: "stairways to heaven",
    year: 1968,
    anotherFamousSong: "kashmir",

};
const { bandName: var1, famousSong: var2, ...var3 } = band; //with ... we get third variable var3
console.log(var3);