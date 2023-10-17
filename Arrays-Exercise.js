let fruits = ["apple","banana","strawberry","avacado"];

let numberOfArray = fruits.length;
console.log(numberOfArray);

let firstVariable = fruits[0];
let lastVeriable = fruits[fruits.length-1];

console.log(` first Variable = ${firstVariable}`)
console.log(` last Variable = ${lastVeriable}`)


let foundApple = "apple";

if (fruits.includes(foundApple)){
    console.log("this array include a apple")
}
else{
    console.log("this array dont include a apple")
}

// fruits.push("cherry")
// console.log(fruits);

fruits.splice(2);
console.log(fruits);