 // how to iterate object

 //for in loop
 //object.keys

 // const person = {
 //      name: "bajrang",
 //      age: 22,
 //      "few hobbies": ["guitar", "sleeping", "listening music"]
 // }
 // for (let key in person) {
 //      console.log(person[key]); // with this we get the string numbers and arrays which are stored in variable
 // }

 // other way

 // const person = {
 //     name: "bajrang",
 //     age: 27,
 //     "few hobbies": ["guitar", "sleeping", "listening music"]
 //}
 //  for (let key in person) {
 //     console.log(`${key} : ${person[key]}`); // with this we get the key with : and string numbers and arrays which are stored in variable
 // }
 //output--.> name : bajrang
 //            age : 22
 //       new hobbies : guitar, sleeping, listening music


 // FOR IN LOOP IN OBJECT

 //  const person = {
 //      name: "bajrang",
 //      age: 27,
 //      "few hobbies": ["guitar", "sleeping", "listening music"]
 //  }
 //  for (let key in person) {
 //      console.log(key, person[key]); // or we can use this--> console.log(key,":" person[key]);
 //  }

 // FOR OF LOOP IN OBJECT getting only keys


 //  const person = {
 //      name: "bajrang",
 //      age: 27,
 //      "few hobbies": ["guitar", "sleeping", "listening music"]
 //  }
 //  for (let key of Object.keys(person)) {
 //       console.log(key); // TO GET THE OBJECT KEYS
 //      console.log(person[key]);
 //  }
 // output--> name
 //           age
 //           few hobbies

 // only getting the values of keys

 const person = {
     name: "bajrang",
     age: 22,
     "few hobbies": ["guitar", "sleeping", "listening music"]
 }
 for (let key of Object.keys(person)) {
     console.log(person[key]);
 }