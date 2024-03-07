![alt text](photo1.png)
Merhaba, serinin ikinci yazısı ile devam ediyoruz. Bu bölümde JavaScript Veri Tiplerini daha detaylı bir şekilde inceleyeceğiz.

Bir önceki bölümde veri tiplerine giriş yapmıştık. Tekrardan hatırlamak adına, Js’de veri tipleri iki ana başlık altında toplanıyor.

#### Primitive (İlkel) Veri Tipleri
#### Non-Primitive (İlkel Olmayan) Veri Tipleri

### Primitive Veri Tipleri
Numbers, Strings, Booleans, Null, Undefined, Symbol

### Non-Primitive Veri Tipleri
Functions, Arrays, Objects

Bunların açıklamalarını yine aynı şekilde bir önceki bölümden okuyabilirsiniz.

Primitive veri tipleri değerlerine göre karşılaştırılırlar. Bu cümlede denileni anlamak için aşağıdaki iki örneği inceleyelim.
```
// Örnek-1
let numberOne = 5
let numberTwo = 5
console.log(numberOne == numberTwo) // True

// Örnek-2
let name = 'Mustafa'
let city = 'Heidelberg'
console.log(name == city) // False

```
Örnek-1'de farklı isimlerde fakat aynı değerde iki değişken tanımladık, console.log(numberOne == numberTwo) ifadesi ile numberOne eşit mi numberTwo diye öğrenmek istedik bu ifade bize boolean veri tipi döndürdü yani True.

Örnek-2'de farklı isimlerde ve farklı değerlerde iki değişken tanımladık,console.log(name == city) ifadesi ile name eşit mi city değerine diye öğrenmek istedik fakat bu sefer false değeri döndü.

Örnek-1'de değişkenler içindeki değerler eşit olduğundan dolayı True sonucunu aldık. Örnek-2'de değişkenler içinde farklı değerler olduğundan dolayı False cevabını aldık. Yani Primitive veri tipleri değerlerine göre karşılaştırılırlar, cümlesini doğrulamış olduk.

Peki Non-Primitive Veri tipleri neye göre karşılaştırılır ?

Non-Primitive veri tipleri referanslarına göre karşılaştırılır.

Referans kavramına bir önceki yazıda yine değinmiştik. Güzel bir örnekle açıklamasını bulabilirsiniz. Fakat şimdi daha farklı bir açıklamayla yeniden inceleyelim. Non-Primitive veri tipleri birbirleri ile kıyaslandığında bellek adreslerine dayalı olarak kıyaslanır. Yani iki non-primitive veri tipi (referans veya object veri tipleride deniyor) değerinin eşit olup olmadığını kontrol etmek, aynı bellek konumunu işaret edip etmediklerini kontrol etmek anlamına gelir. Aşağıda bulunan örneği inceleyelim.
```
// Örnek-1
let numbersA = [1,2,3]
let numbersB = [1,2,3]
console.log(numbersA == numbersB) // false

// Örnek-2
let numbersA = [1,2,3]
let numbersB = numbersA
console.log(numbersA == numbersB) // true

```
Örnek-1'de iki farklı isimde fakat aynı değerde iki adet dizi tanımladık. console.log(numbersA == numbersB) ifadesi ile bu iki değişkenin değerleri eşit mi diye kontrol etmek istediğimizde false sonucunu alacağız. İlk olarak şunu hatırlayalım bu veri tipleri non-primitive veri tipi yani referanslarına göre karşılaştırma yapacak. let numbersA değişkeni ile let numbersB değişkeninin bellekte işaret ettikleri konumlar farklı olduğundan dolayı false sonucunu aldık.

Örnek-2'de iki farklı isimde ve iki farklı değerde iki adet dizi tanımladık. console.log(numbersA == numbersB) ifadesinin soncunun true olduğunu görüyoruz. Bunun sebebi let numbersB = numbersA diyerek numbersB değerine numbersA’yı atadık. Bu iki değer non-primitive veri tipi olduğundan , numbersA’nın referansını numbersB’ye atadık. Bunun için true ifadesini aldık.

### Numbers
Number veri tipi sayısal verileri temsil eder, tüm aritmetik işlemlerde kullandığımız sayılar diyebiliriz. Tamsayılar veya ondalık sayılar…
```
const PI = 3.14
let weight = 80
let age = 25

```
Devam etmeden önce Object (Nesne) ile Method (Metot) arasındaki farkları teorik ve uygulamalı şekilde anlamaya çalışalım.

Object diğer adıyla Nesne bildiğimiz gibi bir veri türüdür. Objeler, özellik(property) içerirler. Bu özellikler objenin karakterini veya verilerini temsil edebilir. Örnek olarak;
```
let person = {
name:"Mustafa",
surname:"Gözcü",
city:"Heidelberg" 
};

```
Yukarıdaki örnekte person bir objedir. Name, surname ve city objenin özellikleridir.

Method (metot) ise bir objenin üzerinde çalışan fonksiyondur. Genellikle objenin davranışını veya işlevselliğini temsil eder. Metotlar bir obje içinde tanımlanırlar ve obje üzerinden çağrılırlar. Örnek olarak;
```
let car = { 
brand:"Audi",
model:"RS6",
engine: function(){
     console.log("engine started!")}
}

car.engine();

```
Yukarıdaki örnekte engine , car objesi içinde tanımlanan bir metotdur. engine metotdunu çağırdığımızda car objesinin davranışını temsil eden bir işlem gerçekleşir. Bunuda car.engine(); diyerek yaptık.

Tüm bu anlattıklarımızı toparlayacak olursak. Bir obje, veriyi ve bu veri üzerinde çalışan işlevselliği bir araya getiren bir veri türüdür. Bir metot, bir obje içinde tanımlanan ve bu obje üzerinden çağrılabilen bir fonksiyondur.

En son number veri türünde kalmıştık. Metot ve objenin farkını anlamamız önemliydi çünkü şimdi Js’de Math Objesini inceleyeceğiz.

### Math Objesi
Js’de Math objesi matematiksel hesaplamalar yapmak için kullanılan önceden tanımlanmış bi objedir. Bu obje bir dizi matematiksel metotlar içerir ve bu metotları kullanarak çeşitli matematiksel işlemleri gerçekleştirebiliriz. Çoğu programlama dilinde bu tarz önceden tanımlanmış metotlar mevcuttur bu sayede çoğu işlemi daha basit ve kısa sürede yapabiliriz. Şimdi Math Objesinin metotlarını inceleyelim ;
```
const PI = Math.PI  
console.log(PI) // 3.14 

console.log(Math.round(9.81)); // Math.round metodunu kullanarak 
                               // 9.81 sayısını en yakın tam 
                               // sayıya yuvarlayabiliriz.


let randomNum = Math.random(); // 0 ile 1 arasında (1 dahil değil) 
                               // rastgele bir ondalık sayı üretir.
console.log(randomNum);


console.log(Math.sqrt(2)); // Math.sqrt metodunu kullanarak bir sayının karekökünü hesaplayabiliriz.

```
### Strings
Js’de string veri tipi metin veya karakter dizilerini temsil eden veri türüdür. Bir string, bir veya daha fazla karakterin bir araya gelmesiyle oluşur ve genellikle tek tırnak (') veya çift tırnak (") içinde tanımlanır.
```
let language: "Javascript";
let job:'Software Engineer';
let details: "Hi everybody this article about Javascript."

```
Yukarıda yer alan ifadeler string veri türüne örneklerdir. Zaten bir önceki yazıda da görmüştük.

Operatör bir programlama diline belirli işlemleri gerçekleştiren sembol veya işaretlere verilen isimdir. İki number veri türünde tanımlanan değişkenin değerlerini toplamak için + operatörünü kullanırız. Operatörleri daha detaylı olarak bir sonraki yazıda inlceyeceğiz.

Farklı string ifadeleri (+) operatörü ile birleştirilebilir.
```
let name = "Mustafa";
let surname =  "Gözcü";

let fullName = name + surname;
console.log(fullName) // MustafaGözcü

```
#### Uzun String İfadeleri

Elinizde uzun bir string ifade var bu uzun string ifade için belirli “escape sequences” yani kaçış dizeleri kullanabiliriz.

##### \n : yeni satıra geçer
```
console.log('This article about Js learning and if you like it ,\nYou can give claps') 
   Çıktısı:
   This article about Js learning and if you like it ,
   You can give claps

```
##### \t : string ifadeler için bir tab boşluk bırakır.
```
console.log('Js\tWeb\tData')
Çıktısı:
Js      Web     Data
```
##### \\ : Bir string ifade içerisinde bir ters eğik çizgi ( \ ) yazmak istediğimizde yazamayız. Bunun için iki ters eğik çizki ( \\ ) kullanırız.
```
console.log('backslash = (\\)') 
Çıktısı:
backslash = (\)
```
##### \’ : Bir string ifade içerisinde bir tırnak işareti kullanmak istediğimizde \’ ifadesini kullanırız. \’ ifadesini kullanmadan ‘Programming Language’ yazarsak hata alacağız.
```
console.log('Javascript is so popular \'Programming Language\'')
Çıktısı:
Javascript is so popular 'Programming Language'
```
##### \” : Bir string ifade içerisinde metin dizisi dışında bulunan çift tırnaklarla çakışmaması için t \” ifadesini kullanırız. Normalde “Programming Language” şeklinde yazabiliriz fakat diğer çift tırnaklarla çakışmaması için \” için kullanıyoruz.
```
console.log('Javascript is so popular \"Programming Language\"')
Çıktısı:
Javascript is so popular "Programming Language"
```
### String Metotları
String veri türününde birden fazla metotları mevcuttur. Bunların hepsini bu makalede anlatmak makaleyi fazlaca uzatacaktır bu yüzden en çok kullanılan bir kaç metot inceleyeceğiz.

1- Length: Bir stringin karekter sayısını döndüren metottur. Stringin uzunluğunu ölçmek için kullanılır.
```
let sentence = 'I think this article is so useful.'
console.log(sentence.length) // 34
```
2- toUpperCase(): Bu metot string ifadenin tüm karakterlerini büyük harf yapar.
```
let word = 'hello world'
console.log(word.toUpperCase());
// HELLO WORLD
```
3- toLowerCase(): Bu metot string ifadenin tüm karakterlerini küçük harf yapar.
```
let word = 'HELLO WORLD'
console.log(word.toLowerCase());
// hello world
```
4- substr(): Bu metot iki parametre alır. (içine yazdığımız değerler paramteredir.) Birinci parametre string ifadenin hangi karakterinden başlayacağını , ikinci parametre kaç karakter boyunca devam edeceğini gösterir. Bu metotun amacı string ifadeyi bölmektir.
```
let string = 'JavaScript'
console.log(string.substr(4,6)) // Script
```
### Veri Tipi Kontrol Etme
Bir değişkenin veri tipini kontrol etmek için typeof metodunu kullanıyoruz.
```
let name = 'Algorithm'      
let surname = 'Javascript'       
let city = 'Heidelberg'         
let age = 100                  
let job                       

console.log(typeof 'Algorithm')  // string
console.log(typeof surname)   // string
console.log(typeof 200)          // number
console.log(typeof 3.14)        // number
console.log(typeof true)        // boolean
console.log(typeof false)       // boolean
console.log(typeof NaN)         // number
console.log(typeof job)         // undefined
console.log(typeof undefined)   // undefined
console.log(typeof null)        // object
```
### String ifadeleri sayıya dönüştürmek:
1. parseInt()
```
let number = '100'
let numberInt = parseInt(number)
console.log(numInt) // 100
```
2. Number()
```
let number = '100'
let numberInt = parseInt(number)
console.log(numInt) // 100
```
3. +
String bir ifadeyi sayı veri tipine (number) dönüştürmek için en kolay yol + sembolü kullanmak.

```
let number = '100'
let numberInt = +number
console.log(numberInt) // 100
```
Bir yazının daha sonunda gelmiş bulunmaktayız. Serinin diğer yazılarında görüşmek üzere…

