// Exercises: Level 1
// Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.

const firstName = 'Melis';
const lastName = 'Ermez';
const country = 'Turkey';
const city = 'Istanbul';
const age = 23;
const isMarried = false;
const year = 1998;

// Check if type of '10' is equal to 10
if (typeof '10' == 10) {
    console.log("eşittir");
} else{
    console.log("eşit değildir.")
}

// Check if parseInt('9.8') is equal to 10

if (typeof parseInt(9,8) == 10) {
    console.log("eşittir")
}else{
    console.log("eşit değildir.");
}


// Boolean value is either true or false.
// Write three JavaScript statement which provide truthy value.
const isTrue = true; 
const isNumber = 45;
const isString = "Hello World!";
// Write three JavaScript statement which provide falsy value.
const isFalse = false;
const isFlasy = 0;
const isFlasy2= "";

// Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()

// 4 > 3 
console.log(4>3);
// 4 >= 3
console.log(4>=3)
// 4 < 3
console.log(4<3);
// 4 <= 3
console.log(4<=3)
// 4 == 4
console.log(4==4)
// 4 === 4
console.log(4===4);
// 4 != 4
console.log(4 != 4)
// 4 !== 4
console.log(4 !== 4);
// 4 != '4'
console.log(4 != '4');
// 4 == '4'
console.log( 4 == '4');
// 4 === '4'
console.log(4 === '4')
// Find the length of python and jargon and make a falsy comparison statement.
const ap = "python";
const bb = "jargon";

const lengthA = ap.length;
const lengthB = bb.length;

console.log(lengthA == lengthB);


// Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()
console.log("*************")
// 4 > 3 && 10 < 12
console.log(4>3 && 10<12);
// 4 > 3 && 10 > 12
console.log(4>3 && 10>12);
// 4 > 3 || 10 < 12
console.log(4>3 || 10<12);
// 4 > 3 || 10 > 12
console.log(4>3 || 10>12);
// !(4 > 3)
console.log(!(4>3));
// !(4 < 3)
console.log(!(4<3));
// !(false)
console.log(!(false));
// !(4 > 3 && 10 < 12)
console.log(!(4 > 3 && 10 < 12))
// !(4 > 3 && 10 > 12)
console.log(!(4 > 3 && 10 > 12))
// !(4 === '4')
console.log(!(4 === '4'))
