![alt text](photo1.png)
Herkese Merhaba, Serinin üçüncü yazısı ile devam ediyoruz.

### Boolean Veri Tipi
JavaScript’de Boolean veri tipi, yalnızca iki değeri alabilen bir veri tipidir: true (doğru) veya false (yanlış). Boolean değerleri genellikle karar verme süreçlerinde, kontrol yapılarında ve koşullu ifadelerde kullanılır.

```js
let isCorrect = true
let isBig = 34 > 35   //false
```
Boolean veri tipini çok sık kullanacağız ve yapacağımız proje derinleştikçe daha farklı durumlar ortaya çıkacak bu yüzden aşağıdaki durumları bilmemiz, boolean veri tipini kullanırken işimizi oldukça kolaylaştıracaktır.

#### True Değerler:
Tüm Sayılar ( pozitif ve negatif ) : Sıfırdan farklı her sayı true değerini alır.
Tüm stringler : Boş olmayan her string true değerini alır. ( Yani ‘jsjsj’ gibi bir string ve ‘ ‘ ( bu string içinde sadece bir boşluk var) true değerini alır.)

#### False Değerler
0 : Sayı olarak sıfır false değerini alır.
null: null false değerini alır.
undefined : undefined false değerini alır.
NaN (not a number) : “NaN” (Not a Number), sayı olmayan bir değeri temsil eden özel bir değerdir. NaN, genellikle hatalı sayısal işlemlerin sonucunda ortaya çıkar ve hataları işlemek için kullanılır. Ve NaN false değerini alır.
Boş karakter dizileri (empty strings) = ‘’, “”, ``, false değerini alırlar.


### OPERATÖRLER
JavaScript’te operatörler, değişkenler, değerler ve ifadeler üzerinde işlemler gerçekleştirmek için kullanılan sembol veya özel kelimelerdir.

#### Atama Operatörleri
Bir değişkene, değer atamak istediğimizde kullanılır. ( eşittir işareti = )
![alt text](p1.png)(https://github.com/Asabeneh/30-Days-Of-JavaScript/blob/master/03_Day_Booleans_operators_date/03_booleans_operators_date.md)


#### Aritmetik Operatörler
Matematiksel işlemleri yapmak için kullandığımız operatörlerdir.

Toplama(+): a + b
Çıkarma(-): a — b
Çarpma(*): a * b
Bölme(/): a / b
Mod Alma:(%): a % b
Üs Alma(**): a ** b

```js
let n1 = 34
let n2= 90
let sum = n1 + n2
let diff = n1 - n2
let mult = n1 * n2
let div = n1 / n2
let mod = n1 % n2
let usAlma = n1 ** n2
```

#### Karşılaştırma Operatörü
JavaScript’te karşılaştırma operatörleri, değişkenler arasındaki ilişkiyi kontrol etmek için kullanılır.
![alt text](p2.png)(https://github.com/Asabeneh/30-Days-Of-JavaScript/blob/master/03_Day_Booleans_operators_date/03_booleans_operators_date.md)

Karşılaştırma operatörlerinde dikkat etmemiz gereken kısımlar var. Bunlar;

1. == (iki tane eşittir) : İki değeri karşılaştırır. Eşitse true değilse false döndürür.
2. === (üç tane eşittir): İki değeri hem değerlerine göre hem de veri türüne göre karşılaştırır. Değerler ve veri türü eşitse true değilse false döndürür.

! ifadesi mantıksal değeri tersine çevirmek için kullanılan bir operatördür. Örneğin;

```js
let durum = true;
let yeniDurum = !durum;
Console.log(yeniDurum); //false
```
3. != : İki değeri karşılaştırır. Eşitse false değilse true döndürür.

4. !== : İki değeri hem değerlerine göre hem de veri türüne göre karşılaştırır. Değerler ve veri türü eşitse false değilse true döndürür.

```js
console.log(20 > 1)  // true
console.log(99 >= 7)  // true
console.log(7 == '7')  // true (Çünkü sadece değerlerini karşılaştırıyor yani sağda ki de 7 solda ki de)
console.log(7 === '7') // false ( Çünkü hem veri tipi hemde değerlerini kıyaslıyor.)
console.log( 7 != 7) // false
console.log( 7 !== '7') //true
console.log(0 == false) // true
console.log(0 === false) //false değer olarak aynı fakat veri tipi olarak farklı olduğundan dolayı cevap false
console.log(0 == '')  // true
console.log(0 == ' ') // true
console.log(0 === '') //false
console.log(1 == true) // true
console.log(1 === true) // false 
console.log(undefined == null)  // true
console.log(undefined === null) //false
console.log(NaN == NaN) // false JavaScript'te NaN (Not a Number), kendisiyle dahil olmak üzere hiçbir değere eşit değildir, bu nedenle NaN == NaN ifadesinin sonucu false olur.
console.log(NaN === NaN) // false
```

#### Mantıksal Operatörler
Mantıksal operatörler, mantıksal ifadeleri birleştirmek veya değerlerin mantıksal durumlarını değiştirmek için kullanılır.

Ve Operatörü (&&): İki koşulun da doğru olduğu durumda true değeri döndürür.

Veya Operatörü (||): En az bir koşulun doğru olduğu durumda true değeri döndürür.

```js
let control= 7 > 1 && 17 > 10        // true && true -> true

let control= 7 > 1 || 27 > 37       // true || false -> false
```
#### Arttırma ve Azaltma Operatörü
##### Arttırma ve azaltma operatörünü kullanarak değişkenlerin değerini arttırıp azaltabiliriz.

1. Pre-increment ve Pre-decrement
```js
// Ön arttırma operatörü : Önce değeri arttırır
let number = 0
console.log(++number)  //1
console.log(number) // 1

--------------------------

// Ön azaltma operatörü : Önce değeri azaltır

let number = 0 
console.log(--number) // -1
console.log(number) // -1 
```
2. Post-increment ve Post-decrement
```js
// post-increment Önce değeri yazdırır sonra +1 arttırır
let number = 0 
console.log(number++)  // 0 
console.log(number) // 1

//post-decrement önce değeri yazdırır sonra -1 azaltır
let number = 0
console.log(number--) //0
console.log(number) // -1
```

#### Ternary Operatör
Bir koşulu değerlendirip koşul doğruysa bir değer, koşul yanlşsa başka bir değer döndüren operatördür. Söz dizimi aşağıda ki gibidir. Koşuldan sonra ? (soru işareti ) ve koşul doğru ise dönecek değer yazılır daha sonra : işareti koyulur ve daha sonra koşul yanlışsa dönecek değer yazılır.

```js
(KOSUL ? TRUE : FALSE)

let saat = 20;
let mesaj = saat < 12 ? "Günaydın" : "İyi Günler"
console.log(mesaj) // İyi Günler
```

#### Date Objesi
JavaScript’te Date nesnesi, tarih ve saat bilgilerini temsil etmek için kullanılan bir yapıdır. Bu date objesi bir sürü method sağlar.

![alt text](p3.png)(https://github.com/Asabeneh/30-Days-Of-JavaScript/blob/master/03_Day_Booleans_operators_date/03_booleans_operators_date.md)

Bu methodları kullanmak için öncelikle Date objesi oluşturmamız lazım. const time = new Date() diyerek nesnemizi oluşturuyoruz , const kullanmamızın sebebi, time değişkeninin değerini başka bir yerde kullanıp değiştirmeyeceğimizden dolayı sabit bir değişken olarak düşünebiliriz.

```js
const time = new Date()
console.log(time) // 2024-03-14T07:57:54.244Z

console.log(time.getFullYear()) // 2024
```

Örnekleri daha çoğaltabiliriz fakat asıl amacımız temel yapıyı öğrenmek olduğundan yazıyı fazlaca uzun tutmak istemedim. Diğer yazılarda görüşmek üzere. Keyifli okumalar.












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

