//Diziler için Destructuring
// const numbers = [10,12,14]
// const [number1,number2]=numbers
// console.log(number1,number2)


// const stack = [
//     ["HTML","CSS",["js","React","svelte"]],
//     ["PHP","MYSQL","NODEJS"]
// ]

// const [[firstLanguage,,[second]],backend] = stack
// console.log(firstLanguage);
// console.log(backend);
// console.log(second);
// //es geçmek için virgül koyabilirisin. 

// //undefinedlara değer ataması yapabiliriz. 
// const names = [undefined,"Melih","Tasson"]
// const [firstName="Melih",
// secondName,
// thirdName]=names
// console.log(firstName)
// console.log(secondName)
// console.log(thirdName)


// const countries = [['Finland', 'Helsinki'], ['Sweden', 'Stockholm'], ['Norway', 'Oslo']]
 
// for(const [country,city] of countries){
//     console.log(country,city)
// }

//Objeler için Destructuring
// const user = {
//     name: "Tayfun Reis'in videoları gerçekten iyi :)",
//     surname:"Erbilen",
//     //adana:"Adana ili güzeldir",
//     age:29,
//     pets:{
//         cats:["Asil"],
//         dogs:["Monti"]
//     }
// }

// const {surname: soyad, adana="madana"} = user
// console.log(soyad,adana)


//örnek
// function multiply([number1,number2,number3]){
//     return number1 * number2 * number3
// }

// const numbers = [10,10,20]
// console.log(
//     multiply(numbers)
// )


//örnek 
const user = {
    name: "Tayfun Reis'in videoları gerçekten iyi :)",
    surname:"Erbilen",
    //adana:"Adana ili güzeldir",
    age:29,
    pets:{
        cats:["Asil"],
        dogs:["Monti"]
    }
}

function showUserInfo({name,surname,age,pets}){
    return `Merhaba, ben ${name} ${surname}, ${age} yaşındayım. Ve ${pets.cats.length} kedim ve ${pets.dogs.length} köpeğim var`
}

console.log(
    showUserInfo(user)
)