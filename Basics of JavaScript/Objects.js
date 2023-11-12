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


// obje örnekleri

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
    ],
}

console.log(user);
console.log(user.cars[1].name);

// 2.obje örneği
const person = {
    firstName: 'Asabeneh',
    lastName: 'Yetayeh',
    age: 250,
    country: 'Finland',
    city: 'Helsinki',
    skills: [
      'HTML',
      'CSS',
      'JavaScript',
      'React',
      'Node',
      'MongoDB',
      'Python',
      'D3.js'
    ], 
    getFullName: function(){
        return `${this.firstName} ${this.lastName}`
    },
    'phone number': '32132131321321'

}

//bu değerlere normalde şu şekilde erişebiliyorduk.
console.log(person.firstName);
//ama şu şekilde de erişebiliriz:
console.log(person["firstName"]);
//metoda ulaşmak için;
console.log(person.getFullName());

//objede bulunan propertyilere yeni değerler atama ve yeni propertyler ekleme
 person.nationality="Germany"
 person.country="Turkey"
 person.skills.push("Ruby")
 person.skills.push("Deep Learning")
 
 //objeye yeni metot ekleme
 person.getPersonInfo = function(){
    let skillsWithoutLastSkill = this.skilss.splice(0,this.skills.length-1).join(',')
    let lastSkill = this.skills.splice(this.skills.length - 1)[0]
    let skills = `${skillsWithoutLastSkill}, and ${lastSkill}`
    let fullName = this.getFullName()
    let statement = `${fullName} is a ${this.title}.\nHe lives in ${this.country}.\nHe teaches ${skills}.`
  return statement
 }
 console.log(person)
console.log(person.getPersonInfo())


 console.log(person);
