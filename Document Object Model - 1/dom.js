
// const h1Elements = document.getElementsByTagName('h1');


// // let len = h1Elements.length
// // for (let i = 0; i < len; i++){
// //     console.log(h1Elements[i])
// // }

// [...h1Elements].forEach(item => {
//     console.log(item)
// })

// const h1 = document.getElementsByClassName('title-1')
// console.log(h1)
// document.querySelectorAll('h1').forEach(h1,index => {
//     if(index % 2 == 0) {
//         h1.style.color='green'
//     } else {
//         h1.style.color = 'yellow'
//     }
// });



// for (let i = 0; i < 10; i++) {
//     let title =  document.createElement('h1')
//     title.className = 'title'
//     title.style.fontSize = '24px'
//     title.textContent = 'dsadsada'
//     title.style.backgroundColor = 'red'

// document.body.append(title)
    
// }

// const button = document.getElementById('btn')
// button.addEventListener('click', function(e){
//     console.log(e)
// })

// function clickHandle(e) {
//     console.log(e)
// }

const input = document.getElementById('name')
input.addEventListener('input', e=>{
    console.log('birseyler yazılıyor', e.target.value)
})
    