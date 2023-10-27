// Exercise: Level 1
// Create an index.html file and put four p elements as above: Get the first paragraph by using document.querySelector(tagname) and tag name
// const firstP = document.querySelector("p")
// console.log(firstP)

// Get each of the the paragraph using document.querySelector('#id') and by their id
// const paragraphs = document.querySelector("#p")
// console.log(paragraphs)



// Get all the p as nodeList using document.querySelectorAll(tagname) and by their tag name
// const wholeP = document.querySelectorAll("p")
// console.log(wholeP)


// Loop through the nodeList and get the text content of each paragraph
// const wholeP = document.querySelectorAll("p")

// wholeP.forEach((text,i)=>{
//     const textCont = text.textContent;
//     console.log(textCont)
// })


// Set a text content to paragraph the fourth paragraph,Fourth Paragraph
// const fourthParagraph = document.querySelectorAll("p")[3];
// fourthParagraph.textContent="Fourth Paragraph";

// Set id and class attribute for all the paragraphs using different attribute setting methods
const paragraphs = document.querySelectorAll("p");

paragraphs[0].id = "first-paragraph";
paragraphs[0].classList.add("paragraph-class");

paragraphs[1].setAttribute("id", "second-paragraph");
paragraphs[1].setAttribute("class","paraph-class");

paragraphs[2].setAttribute("id","third-paragraph");
paragraphs[2].classList.add("paragraph-class");

paragraphs[3].setAttribute("id", "fourth-paragraph");
paragraphs[3].setAttribute("class","paragraph-class");