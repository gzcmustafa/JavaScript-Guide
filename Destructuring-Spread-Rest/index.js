// const fullStack = [
//     ['HTML','CSS','JS','REACT'],
//     ['NODE','GO','MONGODB']
// ]


// for (const [first,second,third,fourth,fifth] of fullStack){
//     console.log(first,second,third,fourth,fifth)
// } 


// // const [[firstfrontlang,secondfrontlang],backend] = fullStack
// // console.log(secondfrontlang)


const user = {
    name: 'Steve',
    surname: 'Jobs',
    age: 30,
    pets: {
        cats: ['Asil'],
        dogs: ['Monti']
    }
}

function showUserInfo({name,surname,age,pets: {dogs,cats}}) {
    return `Merhaba, ben ${name} ${surname}, ${age} yaşındayım. Ve ${dogs} adlı köpeğim ve ${cats} adlı kedim var`
}

console.log(
    showUserInfo(user)
)