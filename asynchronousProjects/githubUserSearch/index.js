const input=document.getElementById("input")
const button=document.getElementById("search");
let p=document.getElementById("result");
let p1=document.getElementById("error")

async function github(){
    p.innerText="Loading...";
    p1.innerText="";
    const username=input.value;
    const response=await fetch(`https://api.github.com/users/${username}`);
    console.log(response.ok) //tells if http request was successful
    console.log(response.status); //returns status code
    // console.log(response.url);      
    const data= await response.json();
    console.log(typeof(data)); //checks datatype. did this to know whether it is a object or array
    // console.log(data);
    if(response.ok===false){
        p.innerText="";
        p1.innerText=" Usrname Not found"
    }
    else{
        p.innerText=
        `
        Name : ${data.name}

        Username : ${data.username}

        Followers : ${data.followers}

        Following : ${data.following}
        `
    }
    

}
button.addEventListener("click",github);    


