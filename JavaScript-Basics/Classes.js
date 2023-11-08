// // class oluşturmak için
// class Person {
//     //kodu buraya yazacağız.
// }


// //obje oluşturmak yani class dan nesne (object) türetmek
// const person = new Person()
// console.log(person) // Person {}


//Yukarıdaki örnekte objenin elemanları undefined'dir çünkü sınıfta özellikler tanımlanmamıştır. 
// bir sınıfı kullanarak birden fazla nesne türetebiliriz.
// class Person{
//     constructor(firstName, lastName){
//         this.firstName = firstName
//         this.lastName = lastName
//     }
// }
// const person1 = new Person('Mustafa','Gözcü');
// const person2 = new Person('Aslı','Kandemir')
// const person3 = new Person ('Fatoş','Yıldırım')
// console.log(person1,person2,person3)


//Şimdide sınıfımıza özellikler ekleyelim.
// class Person{
//     constructor(firstName, lastName,age,country,city){
//         console.log(this)
//         this.firstName = firstName
//         this.lastName = lastName
//         this.age = age
//         this.country = country
//         this.city = city    

//     }
// }
// const person1 = new Person('Bedriye','Kandemir','40','Türkiye','İstanbul');
// console.log(person1)

//consturctor anahtar kelimesi ise sınıfın özelliklerini ve başlangıç değerlerini tanımlamak için kullanılır. 

// class Person {
//     constructor(firstName, lastName) {
//       this.firstName = firstName
//       this.lastName = lastName
//     }
//   }
  
//   const person1 = new Person('Ali', 'Vefa')
  
//   console.log(person1)


//consturctor'u default verilerlede kullanabiliriz. 
// class Person {
//     constructor(
//         firstName = 'Aslı',
//         lastName = 'Ermiş'
//     ){
//         this.firstName = firstName
//         this.lastName = lastName
//     }
// }

// const person1 = new Person()
// console.log(person1)
// const person2 = new Person('Ali','Eren')
// console.log(person2)

//klassların içinde metotlar kullanabiliriz. Örnek vermek gerekirse ;
class Person {
    constructor(firstName, lastName, age, country, city) {
      this.firstName = firstName
      this.lastName = lastName
      this.age = age
      this.country = country
      this.city = city
    } 

    getFullName(){
        const fullName = this.firstName + ' ' + this.lastName
        return fullName
    }
}

const person1 = new Person ('Aslı','Gözcü','40','Türkiye','İstanbul')
console.log(person1)

const x = person1.getFullName()
console.log(x);