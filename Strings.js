let learnJs = "How to Learn JavaScript Language.";

let sonuc;

sonuc = learnJs.toLowerCase();
console.log(sonuc);
sonuc = learnJs.toUpperCase();
console.log(sonuc);
sonuc = learnJs.length;
console.log(sonuc);
sonuc = learnJs[1];
console.log(sonuc);
sonuc = learnJs.slice(0, 6);
console.log(sonuc);
sonuc = learnJs.slice(10);
console.log(sonuc);
sonuc = learnJs.slice(-10);
console.log(sonuc);
sonuc = learnJs.slice(-10, -5);
console.log(sonuc);

sonuc = learnJs.substring(0, 6);
console.log(sonuc);
sonuc = learnJs.substring(10);
console.log(sonuc);

sonuc = learnJs.replace("Learn","Dont Learn");
console.log(sonuc);
sonuc = learnJs.trim();
console.log(sonuc);
sonuc = learnJs.trimEnd();
console.log(sonuc);
sonuc = learnJs.trimStart();
console.log(sonuc);

sonuc = learnJs.indexOf("Komple");
console.log(sonuc);
sonuc = learnJs.split(" ");
console.log(sonuc);
sonuc = learnJs.split(" ")[0];
console.log(sonuc);
sonuc = learnJs.split(" ")[3];
console.log(sonuc);


// toLowerCase(): String'i küçük harfle döndürür.

// toUpperCase(): String'i büyük harfle döndürür.

// length: String'in uzunluğunu (karakter sayısını) döndürür.

// [1]: String'in ikinci karakterini döndürür (dizilerin sıfır tabanlı indeksi olduğunu unutmayın).

// slice(0, 6): String'in ilk 6 karakterini alır ve döndürür.

// slice(10): String'in 10. karakterinden sonraki tüm karakterleri alır ve döndürür.

// slice(-10): String'in son 10 karakterini alır ve döndürür.

// slice(-10, -5): String'in sondan beşinci karakterden sondan birinci karaktere kadar olan kısmını alır ve döndürür.

// substring(0, 6): String'in 0'dan 6. karaktere kadar olan kısmını alır ve döndürür.

// substring(10): String'in 10. karakterinden sonraki tüm karakterleri alır ve döndürür.

// replace("Learn", "Dont Learn"): String içindeki "Learn" kelimesini "Dont Learn" ile değiştirir.

// trim(): String'in başındaki ve sonundaki boşlukları (whitespace) kaldırır.

// trimEnd(): String'in sonundaki boşlukları (whitespace) kaldırır.

// trimStart(): String'in başındaki boşlukları (whitespace) kaldırır.

// indexOf("Komple"): String içinde "Komple" kelimesinin ilk bulunduğu indeksi döndürür. Eğer bulunmazsa, -1 döndürür.

// split(" "): String'i boşluk karakterine göre böler ve bir diziye dönüştürür.

// split(" ")[0]: String'i boşluk karakterine göre böler ve bu dizinin ilk öğesini döndürür.

// split(" ")[3]: String'i boşluk karakterine göre böler ve bu dizinin dördüncü öğesini döndürür.