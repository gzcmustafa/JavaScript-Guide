let sayilar = [2,4,12,32,322,1,5,7,15,3,25];
//1-sayılar listesindeki her bir elemanın karesini yazdırınız.
// for (let i=0; i<sayilar.length; i++){
//     let kare = Math.pow(sayilar[i],2);
//     console.log(sayilar[i] + "sayısının karesi = " + kare);
// }

//2-sayılar listesindeki hangi sayılar 5'in katıdır ?
for (let sayi of sayilar){
    if(sayi%5 == 0){
        console.log(sayi  + " 5'in katıdır..");
    }
    else{
        console.log(sayi +"  5'in katı değildir.")
    }
}


// 3-sayılar listesindeki çift sayıların toplanını bulunuz
let toplam=0;
for (let sayix of sayilar){
    if(sayix%2==0){
        toplam +=  sayix;
    }
    
    else{
    }
    
}
console.log("toplam " + toplam)

// *****************************

let urunler = ["iphone 12", "samsung s22","iphone 13","samsung s23"];
// 4-urunler listesindeki tüm ürünleri büyük harf ile yazdırın.
for ( let urun of urunler){
    console.log(urun.toLocaleUpperCase());
}
// 5-ürünler listesidnde içinde samsung geçen kaç ürün vardır ?
let i=0;
for ( let urun of urunler){
    if(urun.includes("samsung")){
        i++;
        
    }
    else{
        
    } 
}
console.log(i+" tane samsung kelimesi içeren ürün var")

let ogrenciler = [
    {
        "ad":"yiğit",
        "soyad":"bilgi",
        "notlar":[60,70,90]
    },
    {
        "ad":"ada",
        "soyad":"bilgi",
        "notlar":[20,10,10]
    },
    {
        "ad":"mercan",
        "soyad":"bilgi",
        "notlar":[80,90,100]
    }

];

// soru1-her öğgrencinin not otralamasını ve başarı durumunu yazdırın;
for(let ogrenci of ogrenciler){
    not_toplam=0;
    adet=0;
    ortalama=0;
   for(let not of ogrenci.notlar){
    not_toplam += not;
    adet++;
   }
   ortalama=not_toplam/adet;
   console.log(`${ogrenci.ad} ${ogrenci.soyad} isimli öğrencinin not ortalaması =  ${ortalama}`)

   if(ortalama>=50){
    console.log("başarılı");
   }
   else{
    console.log("başrısız");
   }
}

// soru2-tüm öğrencilerin not ortalaması kaçtır
let genel_toplam=0;
for ( let ogrenci of ogrenciler){
    let toplam=0;
    for(let not of ogrenci.notlar){
        toplam += not;

    }
    genel_toplam +=toplam;
}
console.log(genel_toplam/3);

