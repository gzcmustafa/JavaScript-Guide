function scopeOrnegi() {
    if (true) {
        var x = 5;
        let y = 10;
        const z = 15;
        console.log("var x:", x); // x'i burada kullanabiliriz
        console.log("let y:", y); // y'yi burada kullanabiliriz
        console.log("const z:", z); // z'yi burada kullanabiliriz
    }
    console.log("var x:", x); // x'i burada da kullanabiliriz
    // console.log("let y:", y); // y'yi burada kullanamayız, hata alırız
    // console.log("const z:", z); // z'yi burada kullanamayız, hata alırız
}

scopeOrnegi();

// console.log("var x:", x); // x'i burada da kullanabiliriz, ancak tanımlı olmadığı için 'undefined' çıktısı alırız
// console.log("let y:", y); // y'yi burada kullanamayız, hata alırız
// console.log("const z:", z); // z'yi burada kullanamayız, hata alırız


// // Bir araba nesnesi oluşturalım
// var araba = {
//     marka: "Toyota",
//     model: "Corolla",
//     yil: 2020,
//     renk: "Beyaz",
//     calistir: function() {
//       console.log("Araba çalıştı!");
//     },
//     durdur: function() {
//       console.log("Araba durdu.");
//     }
//   };
  
//   // Arabayı çalıştıralım
//   araba.calistir();
  
//   // Arabanın markasını yazdıralım
//   console.log("Araba markası: " + araba.marka);
  

const cars = Object.freeze({
    marka: "Toyota",
    model: "Corolla",
    yil: 2020
})

cars.marka = "Honda";
console.log(cars.marka)