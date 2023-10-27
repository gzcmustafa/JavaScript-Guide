// Exercise: Level 2
// Change stye of each paragraph using JavaScript(eg. color, background, border, font-size, font-family)
// const paragraphs = document.querySelectorAll("p")

// paragraphs.forEach((paragraph,i)=>{
//     paragraph.style.color="red"
//     paragraph.style.backgroundColor="black"
//     paragraph.style.fontSize="90px"
//     paragraph.style.border="22px"
// })



// Select all paragraphs and loop through each elements and give the first and third paragraph a color of green, and the second and the fourth paragraph a red color

// const paragraphs = document.querySelectorAll("p")

// paragraphs.forEach((p,i)=>{
//     if((i+1) % 2 === 0){
//         p.style.color="green";
//     }
//     else{
//         p.style.color="red"
//     }
// })





// Set text content, id and class to each paragraph
const paragraphs = document.querySelectorAll("p");

paragraphs.forEach((p,i)=>{
    p.textContent = "NEW PARAGRAPH";
    p.id ="new-id";
    p.classList.add("new-paragraph-class")
})



