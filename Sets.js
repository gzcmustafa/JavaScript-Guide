const names = new Set(["tayfun","erica","ahmet"]);
console.log(names); 

console.log("******************************")

// set'e eleman ekleme
const companies = new Set()
console.log(companies.size)
companies.add("Google")
companies.add("ScanCar")
companies.add("HelloWorld")
console.log(companies)

//set eleman silme
console.log(companies.delete("Google"))
console.log(companies)

//set'de eleman var m ı yok mu kontrol etme
console.log(companies.has("Apple"))

companies.clear()
console.log(companies)
console.log("***********************************")
//çok güzel bir örnek yapalım şimdi , basit ama arkasındaki algoritma gerçekten çok güzel insan aşık oluyor algoritmaya :) :) :) 

const languages = [
    'English',
    'Finnish',
    'English',
    'French',
    'Spanish',
    'English',
    'French',
]
//yukarıdaki diziyi set'e çevirdik ve tekrar edene tüm elemanlar gitti. 
const langSet = new Set(languages)
console.log(langSet)
console.log(langSet.size)

//bu şekilde bir dizi belirleyelim
const counts=[]

for(const l of langSet){
    const filteredLang = languages.filter(lng => lng === l )
    console.log(filteredLang);
    counts.push({lang:l, count:filteredLang.length})
}
console.log(counts)

console.log("***************")

// let a = [1,2,3,4,5]
// let b = [3,4,5,6]
// let c = [...a, ...b]

// let C = new Set(c)
// console.log(C)

console.log("**************")
// console.log("kesişimleri")
// let a=[1,2,3,4,6,7]
// let b= [3,4,5,6]

// let B = new Set(b)

// let c = a.filter(num => B.has(num))
// let C = new Set(c)
// console.log(C)
console.log("*************")
console.log("Küme farkları")
let a = [1, 2, 3, 4, 5]
let b = [3, 4, 5, 6]

let B = new Set(b)

let c = a.filter(num => !B.has(num))
let C = new Set(c)
console.log(C)