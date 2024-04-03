const aTags = document.querySelectorAll('a')

aTags.forEach(a => {
    a.addEventListener('click', e => {
        const href = e.target.getAttribute('href')
        if (href.includes('https') && !confirm('Dış bir bağlantıya gidiyorsun dikkatli ol.')) {
            e.preventDefault()
        }
    })
})

const test1 = document.querySelector('.test1')
const test2 = document.querySelector('.test2')
const test3 = document.querySelector('.test3')


test1.addEventListener('click', () => console.log('test1'))
test2.addEventListener('click', () => console.log('test2'))
test3.addEventListener('click', e => { e.stopPropagation()
    console.log('test3')} )

function sum(...args) {
    console.log(args)
  }
  
console.log (sum(1,2,3,4,5))



