const span=document.querySelector(".value");
let num=0;
const btns=document.querySelectorAll(".btn");
btns.forEach((btn)=>{
    btn.addEventListener("click",(event)=>{

        const classlist=event.currentTarget.classList;
        if(classlist.contains("decrease")){
            num-- ;
        }
        else if(classlist.contains("increase")){
            num++;
        }
        else{
            num=0;
        }
        span.textContent=num;
        if(num<0){
            span.style.color="red";
        }
        else if(num>0){
            span.style.color="green";
        }
        else{
            span.style.color="black";
        }
    });
    
});