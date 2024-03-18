// function functionName(){

// }
// functionName();

// function addTwoNumbers(){
//     let n1=20;
//     let n2=30;
//     let sum = n1+n2 
//     return sum
// }
// console.log(addTwoNumbers())

// function toplam(...sayilar) {
//     let toplam = 0;
//     for (const sayi of sayilar) {
//         toplam += sayi;
//     }
//     return toplam;
// }

// console.log(toplam(1, 2, 3)); // Çıktı: 6
// console.log(toplam(1, 2, 3, 4, 5)); // Çıktı: 15
// console.log(toplam(10, 20, 30, 40, 50, 60)); // Çıktı: 210

// const toplama = function(a,b){
//     return a + b ;
// }

// (function() {
//     console.log("bu fonksiyon kendini çağırır.")
// })();

const toplama = (num1, num2, ...numbers) => {
  console.log(num1)
  console.log(num2)
  console.log(numbers)
}
toplama(2,5,7,8,10)


