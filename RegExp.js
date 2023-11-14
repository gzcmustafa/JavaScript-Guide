let str = "Ben 30 yasındayım  ve 1993 "
let username = "Tayfun Erbilen"

let pattern = 'love'
let flag = "gi"

let regEx = new RegExp(pattern,flag)
console.log(regEx);

//veya bu şekilde tanımlayabiliriz
let regex = /love/gi  //g= global i=letters sensative 

const result = regex.test(str);
console.log(result)


// TÜm eşleşenleri getirmesi için

let string = 'I   lOVe Javascript and i Love Java'
console.log(
    string.match(/love/ig)
)

const txt = 'Python is the most beautiful language that a human begin has ever created.\
I recommend python for a first programming language'

let matchRelpaced = txt.replace(/python|Python/gi,'****')
console.log(matchRelpaced)