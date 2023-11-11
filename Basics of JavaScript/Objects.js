// iki adet obje oluştur ve aşağıdaki soruları yap
// Her siparişin ayrı ayrı kdv dahil toplam ödenen ücertinin hesaplayını (kdv : %18 )
// tüm siparişilerin kdv dahil toplam ödenen ücretini hesaplayınız.

let siparis_1 = {
    "siparis_id" : 101,
    "siparis_tarihi" : "1.12.2022",
    "odeme_sekli" : "kredi kartı",
    "kargo adresi" : "Istanbul",
    "satin_alinan_urunler" : [
        {
            "urun_id" : 5,
            "urun_basligi" : "Iphone 13 pro",
            "urun_url" : "xxxxx.com.tr",
            "urun_fiyati" : 25000,
        },
        {
            "urun_id" : 6,
            "urun_basligi" : "Iphone 13 pro max",
            "urun_url" : "yyyyy.com.tr",
            "urun_fiyati" : 55000,
        }
    ]

}

let siparis_2 = {
    "siparis_id" : 102,
    "siparis_tarihi" : "21.12.2022",
    "odeme_sekli" : "kredi kartı",
    "kargo adresi" : "Ankara",
    "satin_alinan_urunler" : [
        {
            "urun_id" : 6,
            "urun_basligi" : "Iphone 13 pro max",
            "urun_url" : "yyyyy.com.tr",
            "urun_fiyati" : 44000,
        }
    ]

}

let siparisler = [siparis_1,siparis_2];
console.log(siparisler);

let toplam1 = siparis_1.satin_alinan_urunler[0].urun_fiyati + siparis_1.satin_alinan_urunler[1].urun_fiyati * 1.8;
console.log(toplam1);
let toplam2 = siparis_2.satin_alinan_urunler[0].urun_fiyati * 1.8;
console.log(toplam2);

let genelToplam = toplam1 + toplam2;
console.log(genelToplam);


obje örnekleri

const user = {
    name: 'Mustafa',
    surname: 'Gözcü',
    age: 24,
    isMarried: false,
    skilss: [
        "HTML",
        "CSS",
        "JavaScript",
        "Node.JS",
        "Python"
    ],
    cars: [
        {
            name:"Audi RS7",
            myili: 2023
        },
        {
            name:"Mercedes E250",
            myili:2023
        }
    ]
}

console.log(user);
console.log(user.cars[1].name);