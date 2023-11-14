
console.log('ben %d yasindayim', 12345)

console.log("%cDUR!","font-size: 50px") // tarayıcının konsolunda çalıştırınca yazdığımız kuralları uygular. 

console.table(["Ali","Efe","Polat","Alemdar"])

const countries = [
    ['Finland', 'Helsinki'],
    ['Sweden', 'Stockholm'],
    ['Norway', 'Oslo']
  ]
  
  //time metotoları ile bir kod bloğunun çalışma süresini hesaplayabilirz...
  console.time('Regular for loop')
  for (let i = 0; i < countries.length; i++) {
    console.log(countries[i][0], countries[i][1])
  }
  console.timeEnd('Regular for loop') 

 let a = 17
 let b = 27

 console.assert(b > a , 'hahahahah ')
 console.assert(a > b , "puahahahah")



const names = ['Ali', 'Efe', 'Polat', 'Alemdar']
const countries = [
  ['Ankara', 'Turkiye'],
  ['Berlik', 'Almanya'],
  ['Norveç', 'Oslo']
]
const user = {
  name: 'ALi',
  title: 'POlat alemdar',
  country: 'Türkiye',
  city: 'İstanbul Cerrahpaşa',
  age: 35
}
const users = [
  {
    name: '34plt34',
    title: 'Programmer',
    country: 'Türkiye',
    city: 'İstanbul',
    age: 35
  }
]

console.group('Names')
console.log(names)
console.groupEnd()

console.group('Countries')
console.log(countries)
console.groupEnd()

console.group('Users')
console.log(user)
console.log(users)
console.groupEnd()


