// class Person {

// }

// let person = new Person ()
// console.log(person)

class Person {
    constructor(firstName, lastName, age, country='Turkiye',city){
        this.firstName=firstName
        this.lastName=lastName
        this.age=age
        this.country=country
        this.city=city
        this.skills = []
    }

    getFullName(){
        return this.firstName + ' ' + this.lastName + this.country
    }

    get getSkills(){
        return this.skills
    }
    set setSkills(skill){
        this.skills.push(skill)
    }

}

const person1 = new Person ('Mustafa','Gzc',65, undefined,'Bursa')
const person2 = new Person ('Kerem','Er',55, 'Almanya','Heidelberg')

person1.setSkills = 'JavaScript'

console.log(
    person1.getFullName(), 
    person2.getFullName(),
    person1.getSkills,

    )


    // class Matematik {
    //     static toplama(x, y) {
    //       return x + y;
    //     }
      
    //     static carpma(x, y) {
    //       return x * y;
    //     }
    //   }
      
    //   console.log(Matematik.toplama(5, 3)); // 8
    //   console.log(Matematik.carpma(5, 3)); // 15