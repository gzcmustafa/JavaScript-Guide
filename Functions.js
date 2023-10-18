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
