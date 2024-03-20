const a = s1 => {
    const b = s2 => {
        const c = s3 => {
            return s1 + s2 + s3
        }
        return c
    }
    return b
}

// console.log(a(5)(10)(20))
// a adında bir fonksiyon tanımlanır. Bu fonksiyon, bir parametre alır (s1).

// a fonksiyonu içinde, bir fonksiyon olan b tanımlanır. Bu fonksiyon da bir parametre alır (s2).

// b fonksiyonu içinde, bir fonksiyon olan c tanımlanır. Bu fonksiyon da bir parametre alır (s3).

// c fonksiyonu, aldığı üç parametreyi toplayarak sonucu döndürür: s1 + s2 + s3.

// c fonksiyonu, b fonksiyonu içinde tanımlandığı için, b fonksiyonu bir c fonksiyonu döndürür.

// b fonksiyonu, a fonksiyonu içinde tanımlandığı için, a fonksiyonu bir b fonksiyonu döndürür.

// Bu adımları inceleyerek, kodun mantığını şu şekilde özetleyebiliriz:

// a(5) çağrısı, b fonksiyonunu döndürür.
// Bu b fonksiyonuna 10 argümanı verilir (b(10)), bu da c fonksiyonunu döndürür.
// c fonksiyonuna 20 argümanı verilir (c(20)), bu da sonucu döndürür: 5 + 10 + 20 = 35.
// Sonuç olarak, console.log(a(5)(10)(20)) ifadesi 35 sonucunu yazdıracaktır. Bu kod, bir fonksiyonun ardışık olarak çağrılmasını sağlayan currying mantığını kullanır.

// const numbers = [1,3,5,7,9]
// let total = 0
// numbers.forEach(number => total += number)
// console.log(total);


// console.log("Başlangıç");

// // 3 saniye sonra bir kez "Merhaba Dünya!" yazdırma
// setTimeout(function() {
//     console.log("Merhaba Dünya!");
// }, 3000);

// console.log("Bitiş");

// let sayac = 0;

// // Her saniyede bir sayac değerini artırma
// const intervalID = setInterval(function() {
//     sayac++;
//     console.log("Sayac: " + sayac);

//     // // Sayac 5'e ulaştığında interval'i durdur
//     // if (sayac === 5) {
//     //     clearInterval(intervalID);
//     //     console.log("Interval durduruldu.");
//     // }
// }, 1000);

const sayilar = [1, 2, 3, 4, 5];

// Dizideki tüm sayıları toplama
const toplam = sayilar.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
});

console.log(toplam); // Çıktı: 15