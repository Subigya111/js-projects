let totalChars=0;
let remChars=50;
const textarea=document.getElementById("textarea");
const totalCounter=document.getElementById("total-counter");
totalCounter.innerText=totalChars;
const remCounter=document.getElementById("remaining-counter");
remCounter.innerText=remChars;

textarea.addEventListener("keyup",()=>{
    updateCounter();
});
function updateCounter(){
    
    totalCounter.innerText= textarea.value.length;
    remCounter.innerText=50-(textarea.value.length);
    
}

//shorter code than above: just call the updateCounter function

const textarea=document.getElementById("textarea");
const totalCounter=document.getElementById("total-counter");
const remCounter=document.getElementById("remaining-counter");

textarea.addEventListener("keyup",()=>{
    updateCounter();
});
updateCounter();
function updateCounter(){
    
    totalCounter.innerText= textarea.value.length;
    remCounter.innerText=50-(textarea.value.length);
    
}