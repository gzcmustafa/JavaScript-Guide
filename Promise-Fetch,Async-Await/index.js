

// const test = callback => {
//     setTimeout(() => {
//         callback(null ,[1,2,3] )
//     },2000)
// }

// const callback = (err,data) => {
//     if (err) {
//         console.log('hata',err)
//     } else {
//         console.log('data',data)
//     }
// }

// test(callback)


// const doSomething = callback => {
//     setTimeout(()=> {
//         const skills = ['HTML','CSS','JS']
//         callback('It did not go well',skills)
//     },2000)
// }

// const callback = (err,result) => {
//     if(err) {
//         return console.log(err,result)
//     }
//     return console.log(result)
// }
// doSomething(callback)


// let myPromise = new Promise ((resolve,reject)=>{
//     setTimeout(()=>{
//         let succes = false;
//         if(succes) {
//             resolve('işlem başarılı')
//         } else {
//             reject('işlem başarısız')
//         }
//     },2000)
// })


// myPromise.then((sonuc)=>{
//     console.log('İşlem başarılı ve sonuc: ' + sonuc)
// }).catch((hata)=>{
//     console.log('işlem başarısız ve sonuc: ' + hata)
// })




// const promise = new Promise((resolve,reject) => {
//     setTimeout(()=>{
//         resolve('işlem başarısız')
//     },1500)
// })

// promise.then((data)=>{
//     console.log(data)
// }).catch((err)=>{
//     console.log(err)
// })



// //FETCH API
// const API_URL = 'https://restcountries.com/v2/all'

// fetch(API_URL)
// .then(res=>res.json())
// .then(data => console.log(data))
// .catch(err => console.error(err))


const fetchData = async () =>{
    try{
        const response = await fetch(url)
        const responseJson = await response.json()
        console.log(responseJson)
    }
    catch(err){
        console.log(err)
    }
}

fetchData();