// Declare a variable named challenge and assign it to an initial value '30 Days Of JavaScript'.
let challenge = '30 Days of JavaScript'
// Print the string on the browser console using console.log()
console.log(challenge)
// Print the length of the string on the browser console using console.log()
console.log(challenge.length)
// Change all the string characters to capital letters using toUpperCase() method
console.log(challenge.toUpperCase())
// Change all the string characters to lowercase letters using toLowerCase() method
console.log(challenge.toLowerCase())
// Cut (slice) out the first word of the string using substr() or substring() method
console.log(challenge.substr(0,1))
// Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript.
console.log("*** q6***")
const string = "30 Days of Javascript"
const slice_string = string.slice(3);
console.log(slice_string);
// Check if the string contains a word Script using includes() method
console.log("*** q7***")
const string1 = "30 Days of JavaScript"
if (string1.includes("Script")){
    console.log("yes , there is Script word on this sentence")
}
else{
    console.log("no , tehere isn't Script word on this sentence")
}
// Split the string into an array using split() method
console.log("*** q8***")
const sentence = "30 Days of JavaScript"
const splitSentence = sentence.split("")
console.log(splitSentence);
// Split the string 30 Days Of JavaScript at the space using split() method
console.log("*** q9***")
const sentencex = "30 Days of JavaScript"
const splitSentencex = sentencex.split(" ")
console.log(splitSentencex);
// 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.
console.log("*** q10***")
const sentencey = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon"
const splitSentencey=sentencey.split(", ")
console.log(splitSentencey)
// Change 30 Days Of JavaScript to 30 Days Of Python using replace() method.
console.log("*** q11***")
const x = "30 Days of JavaScript"
const newX=x.replace("JavaScript","Python");
console.log(newX);
// What is character at index 15 in '30 Days Of JavaScript' string? Use charAt() method.
console.log("*** q12***")
const sentenceZ="30 Days of JavaScrit";
const word = sentenceZ.charAt(15);
console.log(word);

// What is the character code of J in '30 Days Of JavaScript' string using charCodeAt()
console.log("*** q13***")
const sentenceA = "30 Days Of JavaScript";
const characterCode = sentenceA.charCodeAt(sentenceA.indexOf('J'));
console.log(characterCode);
// Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript
console.log("*** q14***")
var text = "30 Days of Javascript"
var position = text.indexOf("a");
console.log("The position of the first 'a' is: " + position);
// Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript.
console.log("*** q15***")
var textt = "30 Days of Javascript"
var positionn = textt.lastIndexOf("a");
console.log("The position of the last 'a' is: " + positionn);
// Use indexOf to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log("*** q16***")
const sentence10 = "You cannot end a sentence with because because because is a conjunction";
const word10="because";
const position10 = sentence10.indexOf(word10);
console.log(position10)
// Use lastIndexOf to find the position of the last occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log("*** q17***")
const sentence101 = "You cannot end a sentence with because because because is a conjunction";
const word101="because";
const position101 = sentence101.lastIndexOf(word101);
console.log(position101)
// Use search to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log("*** q18***")
const sentence45="You cannot end a sentence with because because because is a conjunction"
const word45 = "because";
const position45 = sentence45.search(word45);
console.log(position45);
// Use trim() to remove any trailing whitespace at the beginning and the end of a string.E.g ' 30 Days Of JavaScript '.
var metin = '          30 Days Of JavaScript                       ';
var temizlenmisMetin = metin.trim();
console.log(metin);
console.log(temizlenmisMetin);

// Use startsWith() method with the string 30 Days Of JavaScript and make the result true
var metin2 = '30 Days Of JavaScript';
var sonuc2 = metin2.startsWith('30');

console.log(sonuc2); // true

// Use endsWith() method with the string 30 Days Of JavaScript and make the result true
var metin2 = '30 Days Of JavaScript';
var sonuc2 = metin2.endsWith('JavaScript');

console.log(sonuc2); 
// Use match() method to find all the a’s in 30 Days Of JavaScript
var text = '30 Days Of JavaScript';
var matches = text.match(/a/g);

console.log(matches);
// Use concat() and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'
var firstPart = '30 Days of ';
var secondPart = 'JavaScript';

var combinedString = firstPart.concat(secondPart);

console.log(combinedString);

// Use repeat() method to print 30 Days Of JavaScript 2 times
var text = '30 Days Of JavaScript';
var repeatedText = text.repeat(2);

console.log(repeatedText);
