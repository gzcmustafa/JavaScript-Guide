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









