//getElementsByTagName ile html elementlerini seçebiliriz. Bu örnekte h1 elementlerini seçtik. 
// const elementsH1 = document.getElementsByTagName("h1");
// console.log(elementsH1);
// for(let i=0; i<elementsH1.length; i++){
//     console.log(elementsH1[i]);
// }



// html elementlerini class isimleri ile seçme;
// const h1=document.getElementsByClassName("title-1");
// console.log(h1);





// html elementlerini id isimleri ile seçmek için.(tek bir elemanı seçebiiriz.)
// const title=document.getElementById("title");
// console.log(title);



//document.querySelector yöntemi, bir HTML veya HTML öğelerini etiket adına, kimliğe veya sınıf adına göre seçebilir.querySelector: can be used to select HTML element by its tag name, id or class. If the tag name is used it selects only the first element. Bunların içine css celectorleride yazabiliriz örnek;
// let abc = document.querySelector( ".title-7 + #title ");

// // select the first available h1 element
// let a = document.querySelector('h1') 
// console.log(a);

// // select id with first-title
// let b = document.querySelector('#title') 
// console.log(b);

// // select the first available element with class title
// let c = document.querySelector('.title-1') 
// console.log(c);


//querySelectorAll ise bize bir nodeList döndürür yani bunun içinde ForEach döngüsünü kullanabiiliriz. kullanabiliriz ama querySelector'de kullanamayız çünkü orada HTML COLLECTİON döndürüyor.
// console.log(
//     document.querySelectorAll(".title-1")
// )



//attribute eklemek için farklı yöntemler mevcut 
// /* 1 */ const title =document.getElementById("title");
// title.style.color="blue"
// title.style.backgroundColor="yellow"
// title.className="puahahah"

/*2. ise setAttribute kullanarak */
// title.setAttribute("style", "color:green; background-color:red")


//Eğerki bu başlıklarını içeriğini değiştirmek istiyorsak yani textlerini bunun için şu özelliği kullanıyoruz.
// const title = document.querySelectorAll("h1")
// title[0].textContent="Yeni Başlık"



//innerHTML ile'de yapabiliriz. ama burada direk html kodları yazmamız lazım. Örnek;
const lists = `
<li>Lİste-1</li>
<li>Liste-2</li>
<li>Liste-3</li>
<li>Liste-4</li>
<li>Liste-5</li>
<li>Liste-6</li>
<li>Liste-7</li>
`
const ul = document.querySelector("ul")
ul.innerHTML = lists


// Renk ve Arka Plan Rengi ekleme

const titles = document.querySelectorAll("h1")
titles.forEach((title,i) => {
    title.style.fontSize="24px" // tüm başlıklar 24px olacak
    if (i % 2 === 0){
        title.style.color="green"
        title.style.backgroundColor = 'black'
        title.style.fontSize = '20px'
    }
    else{
        title.style.color = "red"
        title.style.backgroundColor = 'orange'
        title.style.fontSize = '30px'
    }
})

// Fark ettiğiniz gibi, CSS'yi JavaScript'te kullandığımızda özellikleri bir camelCase olacaktır. Aşağıdaki CSS özellikleri, arka plan renginden arka plan rengine, font-size'den fontSize'ye, font-family'den fontFamily'ye, marj-bottom'dan marjBottom'a değişir.




