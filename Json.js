let sampleJSON = `
[
    {
        "firstName":"Mustafa",
        "lastName":"npm",
        "age":24,
        "email":"helloworld@gmail.com"
    },
    {
        "firstName":"ali",
        "lastName":"npm",
        "age":20,
        "email":"helloworld@gmail.com"
    },
    {
        "firstName":"Serkan",
        "lastName":"npm",
        "age":45,
        "email":"helloworld@gmail.com"
    },
    {
        "firstName":"Nazlı",
        "lastName":"npm",
        "age":38,
        "email":"helloworld@gmail.com"
    }
] `

try {
    let users = JSON.parse(sampleJSON)
    console.log(users)
}catch(err){
    console.log(err.message)
}

//bir js obejesinide json'a çevirmek için 
let categories = [
    {
        name:"css",
        count:5
    },
    {
        name:"js",
        count:29
    }
]
let st = JSON.stringify(categories);
console.log(st)