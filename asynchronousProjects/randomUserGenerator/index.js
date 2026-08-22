const h1=document.getElementById("name");
const p1=document.getElementById("email");
const btn=document.getElementById("button");
const image=document.getElementById("profile");
async function getUser(){
        const result=await fetch("https://randomuser.me/api/")
        const data=await result.json(); //data is object which stores array
        // console.log(data.picture.large);
        const user=data.results[0];
        p1.innerText=user.email;
        h1.innerText=user.name.first +" "+ user.name.last;
        image.src=user.picture.large;
}
btn.addEventListener("click",getUser);
