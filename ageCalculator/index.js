const bday=document.getElementById("birthday");
const btn=document.getElementById("btn");
const result=document.getElementById("result");
btn.addEventListener("click",()=>{

    const date=new Date(); //date.getFullYear();date.getMonth();date.getDate();date.getHours();
    const bdayDate=new Date(bday.value);
    let age =date.getFullYear()-bdayDate.getFullYear();
    let month=date.getMonth()-bdayDate.getMonth();
    if(month<0||month===0 &&date.getDate()<bdayDate.getDate()){
        age =age-1;
    }
    result.innerText="Your age is " + age;
});