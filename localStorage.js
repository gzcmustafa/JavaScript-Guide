// // localStorage.setItem('name','Mustafa') //burası silinse dahi bu bilgi tarayıcıda kalacaktır. 

// // console.log(
// //     localStorage.name // localStorage.getItem('name')
// // )


// const names = ['tayfun','ahmet','mert']
// const user = {
//     name:'tayfun',
//     surname:'erbilen'
// }
// localStorage.setItem('users', JSON.stringify(user))
// console.log(
//     localStorage.users // localStorage.getItem('name')
// )



// let skills = [
//     { tech: 'HTML', level: 10 },
//     { tech: 'CSS', level: 9 },
//     { tech: 'JS', level: 8 },
//     { tech: 'React', level: 9 },
//     { tech: 'Redux', level: 10 },
//     { tech: 'Node', level: 8 },
//     { tech: 'MongoDB', level: 8 }
//   ]
  
//   let skillJSON = JSON.stringify(skills)
//   console.log(localStorage.setItem('skills', skillJSON))
//   console.log(skillJSON)
  
// localStorage.setItem('age', 200)

const user = {
    firstName: 'Mert',
    age:150,
    skills: ['HTML','CSS','JS','React']
}

const userText = JSON.stringify(user,undefined,5)
localStorage.setItem('user',userText)
console.log(userText)

//Local storage dan  veri almak
let firstName = localStorage.getItem('firstName')
let sss = JSON.parse(firstName)
console.log(sss.firstName)




