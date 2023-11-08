// Exercises: Level 3
// 'Love is the best thing in this world. Some found their love and some are still looking for their love.' Count the number of word love in this sentence.

// const sentence = 'Love is the best thing in this world. Some found their love and some are still looking for their love.';

// const wordToSearch = 'love'

// var regex = new RegExp('\\b' + wordToSearch  + '\\b','gi' );
// var count = (sentence.match(regex) || [].length);





// Use match() to count the number of all because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
// const sentence45 = 'You cannot end a sentence with because because because is a conjunction';
// const wordToCount = 'because';

// // 'g' parametresi, metinde tüm eşleşmeleri bulur.
// const regex = new RegExp(wordToCount, 'g');
// const matches = sentence45.match(regex);

// // Eğer eşleşme bulunmazsa, matches null olur. Bu yüzden kontrol etmek önemlidir.
// if (matches) {
//   const count = matches.length;
//   console.log(`"${wordToCount}" kelimesi cümlede ${count} kez geçiyor.`);
// } else {
//   console.log(`"${wordToCount}" kelimesi cümlede hiç geçmiyor.`);
// }

// Clean the following text and find the most frequent word (hint, use replace and regular expressions).

//     const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'

let sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'

const cleanedText = sentence.replace(/[^a-zA-Z\s]/gi,'').toLowerCase();
 
const words = cleanedText.split(' ');
console.log(words);

const wordCounts = {};
for (const word of words) {
  if(wordCounts[word]) {
    wordCounts[word]++;
  } else{
    wordCounts[word]=1;
  }
}

let mostFrequentWord = '';
let highestFrequency = 0;
for (const word in wordCounts){
  if (wordCounts[word] > highestFrequency){
    mostFrequentWord = word;
    highestFrequency = wordCounts[word];
  }
}

console.log(`there are ${mostFrequentWord} ${highestFrequency}`)



// Calculate the total annual income of the person by extracting the numbers from the following text. 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'