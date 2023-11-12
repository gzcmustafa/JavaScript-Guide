// Higher order fonksiyonlar parametre olarak fonksiyon alan veya geriye fonksiyon döndüren fonksiyonlardır :) Yüksek mertebeli fonksiyonlar olarakda geçer. 

//örnek olarak küp alma fonksiyonu yazalım

//bu fonksiyon n'in üssü ikisini alacak.
const callback = n => n ** 2

//bu fonksiyon ise küpünü alacak
function cube (callback,number){
    return callback(number) * number
}

console.log(cube(callback,3));


// diğer bir örnek

const a = s1 => {
    const b = s2 =>{
        const c = s3 =>{
            return s1 + s2 + s3
        }
        return c
    }    
    return b 
}
console.log(a(5)(10)(20));


// setInterval fonksiyonuda bir higher-order funciton'dur.
    function sayHello(){
        console.log('Hello')
    }
    setInterval(sayHello,1000)

//setTimeout fonksiyonuda aynı şekilde higher-order fonksiyondur. 
function sayHello(){
    console.log('Hello')
}
setTimeout(sayHello,10000)

function sayHello(){
    console.log('Hello')
}
const interval = setInterval(sayHello,1000)
const timeout = setTimeout(()=>{
    clearInterval(interval);
    console.log("inteval işlemi iptal edildi");
},5000)

setTimeout(()=>{
    clearTimeout(timeout)
    console.log("timeout işlemi iptal edildi interval devam edeecek")
},3000)


let users = [
    {
        id:1,
        name:"Tayfun",
        age:14
    },
    {
        id:2,
        name:"Melis",
        age:90
    },
    {
        id:3,
        name:"Tasson",
        age:40
    }
    
]
 fonksiyon = users.map(user =>{
    if(user.id === 2){
        user.name="Mustafa"
    }
})

console.log(users)
