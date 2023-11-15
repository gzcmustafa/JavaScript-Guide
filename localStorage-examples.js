let basket = JSON.parse(localStorage.getItem('basket')) || []

const products = [
    {
        id:1,
        title:"Macbook Pro 2021",
        price: 40_000
    },
    {
        id:2,
        title:"Keychron K6",
        price:100
    },
    {
        id:3,
        title:"NurPhy Halo65",
        price:200

    },

]

function addBasket(productId){
    basket.push(productId)
    localStorage.setItem('basket',JSON.stringify(basket))
}

function removeBasket(productId){
    basket = basket.filter(id => id !== productId)
}

console.log(basket)

