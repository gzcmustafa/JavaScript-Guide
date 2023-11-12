//Fonksiyonlar belirli bir görevi yerine getirmek için tasarlanmış kod bloğudur diyebiliriz.

//basit bir fonksiyon tanımlamak içi;
function functionName(){
    // kodları buraya yazarız
}
functionName(); // fonksiyonu çağırırız.


//bir fonksiyon geriye değer döndürmezse undifend çıktısı verir.
function sumArrayValues(array){
    let total = 0;
    for (let i=0; i<array.length; i++){
        total += array[i];
    }
    return total
}
let dizi = [2,4,6,8,10];
console.log("dizi toplamı: " + sumArrayValues(dizi));


//parametre sayısını bilmediğimiz fonksiyonlar için kullanacağımız yapı;
function topla(){
    let total = 0;
    for (let i=0; i < arguments.length; i++){
        total += arguments[i];
    }
    return total
}
console.log("toplam = " + topla(2,5,7,8,9,10));

//anonymous Function yani isimsiz fonksiyon diyebiliriz
const sayHello = function(name){
    return `Hello ${name}`
}
console.log(sayHello('Mustafa'));


// expression function yine aynı şekilde anonymous fonksiyon gibi sadece parametre alıyor.


// Self Invoking Functions 
// kendi kendini döndüren fonksiyon yani hiç çağırmamıza bile gerek kalmıyor programı başlattığımız anda çalışır kendileri :) bu fonksiyonu () içine yazıyoruz..
let sayHello2 = (function(name){
    console.log(`Hello ${name}`)
})("Mustafa");


// Arrow fonksiyon Nedir ?
const hello2 = () => {

}

const hello3 = isim => {
    return `Hallo ${isim}`
}
console.log(hello3("Mustafa"));

// Arrow fonksiyonun diğer kullanımı 
const hello4 = isim3 => `hello ${isim3}`;
console.log(hello4("Tasson"))

//rest operatörü diye bir operatörü arrow fonksiyonda kullanabiliriz.
const sayılari = (num1,num2, ...numbers) =>{
    console.log(num1, num2);
    console.log(numbers);
}
console.log(sayılari(2,5,7,8,9,10,232,3123213,32132131));


// // Soru1- Kendisine gönderilen kelimeyi belirtilen kez ekranda yazan fonksiyonu yazınız.
function kelimeyiYazdir (kelime,sayi){
    for (let i=0; i<sayi;i++){
        console.log(kelime);
    }
}

kelimeyiYazdir("merhaba",2);


// // Soru2- Dikdörtgenin alan ve çevresini hesaplayan fonksiyonu yazınız.
function dikdortgenAlanCevreHesapla(uzunkenar,kisakenar){
    let alan = uzunkenar*kisakenar;
    let cevre = (uzunkenar+kisakenar)*2;
    console.log("Alan " + alan);
    console.log("Cevre " + cevre);
}

dikdortgenAlanCevreHesapla(12,12);


// Soru3- Yazı TUra uygulamasını fonksiyon kullanarak yazınız.
function yaziTura(){
    
    const rastgeleSayi = Math.random();

    if (rastgeleSayi<0.5){
        return "Yazı";
    } else{
        return "Tura";
    }
}

const sonuc = yaziTura();
console.log(sonuc);


// Soru4- Kendisine gönderilen bir sayının tam bölenlerini dizi şeklinde döndüren fonksiyonu yazınnız.
function tamBolenBulma(sayi){
    let dizi=[];
    for (i=1; i<=sayi;i++){
        if(sayi%i==0){
           
            dizi.push(i);
        }else{
            
        }
    }
    return dizi;
}

const bul = tamBolenBulma(25);
console.log(bul);


// soru5-Değişken sayıda parametere içeren bir fonksiyon yazınız.
function degiskenParametre(...sayilar){
    return(sayilar);
}
console.log(degiskenParametre(1,2,4,5,6));
