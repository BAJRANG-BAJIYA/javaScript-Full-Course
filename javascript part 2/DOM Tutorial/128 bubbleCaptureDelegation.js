// console.log("hello world");

const grandparent = document.querySelector(".grandparent");
const parent = document.querySelector(".parent");
const child = document.querySelector(".child");

// for event bubbling
// in the event bubbling if child is clicked then its parent, grandparent
//and body will be selected

//if grandparent clicked then grandparent and body selected
// this is the phenomenon of bubbling

// child.addEventListener(
//     "click",
//     () => {
//         console.log("captured the child");
//     });

// parent.addEventListener("click", () => {
//         console.log("captured the parent");
//     });

// grandparent.addEventListener("click", () => {
//         console.log("captured the grandparent");
//     });

// document.body.addEventListener("click", () => {
//         console.log("captured the document.body");
//     });



// capturing events

child.addEventListener(
    "click",
    () => {
        console.log("capture !!!! child");
    },
    true
);

parent.addEventListener(
    "click",
    () => {
        console.log("capture !!!! parent");
    },
    true
);

grandparent.addEventListener(
    "click",
    () => {
        console.log("capture !!!! grandparent");
    },
    true
);

document.body.addEventListener(
    "click",
    () => {
        console.log("capture !!!! document.body");
    },
    true
);

///// not capture

// child.addEventListener("click", () => {
//   console.log("bubble child");
// });
// parent.addEventListener("click", () => {
//   console.log("bubble parent");
// });
// grandparent.addEventListener("click", () => {
//   console.log("bubble grandparent");
// });
// document.body.addEventListener("click", () => {
//   console.log("bubble document.body");
// });


// event delegation
// by only adding the event e we can justify our target

// grandparent.addEventListener("click", (e) => {
//   console.log(e.target);
// });