let url= "https://heigit.org/heigit-team/";
let teamName= "I'm working with HeiGIT team";

// Soru1- url değişkeni kaç karaterlidir ?
let numberOfCharacters = url.length;
console.log(numberOfCharacters);

// soru2 - teamName değişkeni kaç kelimeden oluşuyor.
let wordsOfTeamName = teamName.split(" ");
console.log(wordsOfTeamName);
console.log(wordsOfTeamName.length);

// soru3- url https ile mi başlıyor?
if(url.startsWith("https") || url.startsWith("HTTPS")){
    console.log("Evet bu ifade https ile başlıyor.")
}
else{
    console.log("hayır bu ifade https ile başlamıyor.")
}

// soru4 - teamName değişkeni içerisinde HeiGIT kelimesi var mı ?
if(teamName.includes("HeiGIT")){
    console.log("evet içeriyor.")
}
else{
    console.log("hayır içermiyor.")
}

// soru5 - bu iki string ifadeyi birleşik şekilde yaz.
let newString = url.concat(teamName);
console.log(newString);