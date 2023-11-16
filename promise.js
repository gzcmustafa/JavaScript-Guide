const promise = new Promise((resolve,reject) => {
    reject("işlem başarısz")
})

console.log(
    promise
)


// promise örnek 2

const doPromise = new Promise ((resolve, rejecet) => {
    setTimeout(() => {
        const skilss = ["Html","CSS","JS"]
        if (skilss.length > 0){
            resolve(skilss)
        }
        else{
            rejecet("something wrong has happened")
        }
    },2000)
})

doPromise.then(result => {
    console.log(result)
}).catch(error => console.log(error))