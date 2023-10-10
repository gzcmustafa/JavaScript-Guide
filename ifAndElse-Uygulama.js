// // Bir sayının 10-50 arasında olup olmadığını kontrol ediniz.
 let number = 50;
 if(number>10 && number<50){
     console.log("Sayı 10 ile 50 arasında")
 }
 else{
     console.log("Sayı 10 ile 50 arasında değil")
 }


// Bir sayının  tek mi çift mi olup olmadığını kontrol ediniz
 let number2 = 21;

 if(number2%2==0){
     console.log("sayı çift")
 }
 else{
     console.log("sayı tek")
 }


//  x, y,z sayılarının büyüklük karşılaştırmalarını yapınız. (else if ile)
 let x=50, y=25, z=45;

 if(x>y && x>z){
     console.log("x en büyük")
 } else if(y>x && y>z){
     console.log("y en büyüktür.")
 } else if(z>x && z>y){
   console.log("z en büyüktür.")
 } else{
      console.log("sayılar eşittir.")
 }


// 2 vize (%40) ve 1 final (%60) notuna göre hesaplanan ortalama için;
    //a-eğer ortalama 50  ve üstündeyse geçti değilse kaldı yazsın.
    //b-geçmek için ortalama 50 bile olsa final notu en az 50 olmalıdır.
    //c-finaden 70 alındığında ortalama 50 nin altında olsa bile dersten geçilsin.

let vize1=50;
let vize2=60;
let final=20;
//---------------------------------------------
// a
 let ortalama = (((vize1+vize2)/2)*0.4) + (final * 0.6);
 console.log("ortalamanız: " + ortalama);
 if (ortalama >=50){
     console.log("geçtiniz");
 } else{
     console.log("kaldınız");
 }
//---------------------------------------------
// b
if(ortalama>=50 && final>=50){
    console.log("geçtiniz");
}else{
    console.log("kaldınız");
}
//c
if(final>=70 || ortalama>=50){
    console.log("geçtiniz");
}else{
    console.log("kaldınız");
}


