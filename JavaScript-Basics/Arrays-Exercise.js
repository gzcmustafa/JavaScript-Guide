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


let student1 = [
    "kerem",
    "duman",
    2010,
    [60,70,90]
];

let student2 = [
    "Ali",
    "saman",
    2008,
    [40,90,100]
];

let student3 = [
    "Mertcan",
    "bilgi",
    1999,
    [50,85,100]
];

// Her öğrencinin yaşı
let currentYear = new Date().getFullYear();

let student1Age = currentYear - student1[2];
console.log(student1Age);

let student2Age = currentYear - student2[2];
console.log(student2Age);

let student3Age = currentYear - student3[2];
console.log(student3Age);

//Her öğrencinin Not ortalaması
let student1GradeAverage = (student1[3][0]+student1[3][1]+student1[3][2])/3;
console.log(student1GradeAverage)

let student2GradeAverage = (student2[3][0]+student2[3][1]+student2[3][2])/3;
console.log(student2GradeAverage)

let student3GradeAverage = (student3[3][0]+student3[3][1]+student3[3][2])/3;
console.log(student3GradeAverage)

