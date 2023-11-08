// Using console.log() print out the following statement:
// The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.
console.log("The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.");

// Using console.log() print out the following quote by Mother Teresa:
// "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
console.log("\"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.\"-Mother Teresa")


// Check if typeof '10' is exactly equal to 10. If not make it exactly equal.
var x = '10';
var y = 10;

if (typeof str === typeof y) {
    console.log("veri türleri aynıdır")
}
else {
    console.log("veri türleri aynı değildi ve şimdi eşitlendi: ")
    var num = Number(x);
    console.log("type of x =  " + typeof num)
    console.log("type of y = " + typeof y)
}

// Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.
var number = parseFloat('9.8');
if (number !== 10) {
  number = 10;
}

console.log(number);


// Check if 'on' is found in both python and jargon
var pythonText = 'python';
var jargonText = 'jargon';

if (pythonText.includes('on') && jargonText.includes('on')) {
  console.log('Her iki dize içinde "on" bulundu.');
} else {
  console.log('Her iki dize içinde "on" bulunmadı.');
}


// I hope this course is not full of jargon. Check if jargon is in the sentence.
const sentence = "I hope this course is not full of jargon";
if (sentence.includes('jargon')){
    console.log("jargon kelimesi bulundu")
}
else{
    console.log("jargon kelimesi bulunamadı")
}

// Generate a random number between 0 and 100 inclusively.
var min = 0;  // Minimum değer
var max = 100;  // Maksimum değer
var randomNum = Math.floor(Math.random() * (max - min + 1)) + min;

console.log(randomNum);


// Generate a random number between 50 and 100 inclusively.
var min = 50;  // Minimum değer
var max = 100;  // Maksimum değer
var randomNum = Math.floor(Math.random() * (max - min + 1)) + min;

console.log(randomNum);

// Generate a random number between 0 and 255 inclusively.
var min = 0;  // Minimum değer
var max = 255;  // Maksimum değer
var randomNum = Math.floor(Math.random() * (max - min + 1)) + min;

console.log(randomNum);

// Access the 'JavaScript' string characters using a random number.
var text = 'JavaScript';
var randomIndex = Math.floor(Math.random() * text.length);
var randomCharacter = text[randomIndex];

console.log('Random character: ' + randomCharacter);


// Use console.log() and escape characters to print the following pattern.
console.log("1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125");


// Use substr to slice out the phrase because because because from the following sentence:'You cannot end a sentence with because because because is a conjunction'
var sentence24 = 'You cannot end a sentence with because because because is a conjunction';
var subString = sentence24.substr(31, 24);

console.log(subString);
