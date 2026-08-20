const container=document.getElementById("container");
const emojis=document.querySelectorAll(".rating");
const button=document.getElementById("btn");
let rating;
emojis.forEach((emoji)=>{
    emoji.addEventListener("click",(e)=>{
        removeActive();
        e.target.classList.add("active"); /*adds class 'active' to the selected element and css styles it
                                         as there is .rating.active property*/
        e.target.parentNode.classList.add("active");
        rating=(e.currentTarget.innerText);
    });
});
button.addEventListener("click",()=>{
    if (rating!==""){
        container.innerHTML=
        `<strong>Thank you!</strong>
        <br>
        <br>
        <strong>Feedback: ${rating}</strong>
        <p>We'll use your feedback to improve our customer support.</p>`
    }
});
function removeActive(){
    emojis.forEach((emoji)=>{
        emoji.classList.remove("active");
    });
}