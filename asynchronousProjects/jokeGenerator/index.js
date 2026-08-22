const button=document.getElementById("button");
const p=document.getElementById("p");
async function generateJoke(){
    p.innerText="Loading..."
    const url= await fetch("https://v2.jokeapi.dev/joke/Any")
    const data=await url.json();
    if(data.type==="single"){
        p.innerText=

        `
        Type: ${data.type}

        Category: ${data.category}

        Joke: ${data.joke}

        `

    }
    else{
            p.innerText=
    `
    Type: ${data.type}

    Category: ${data.category}

    Joke: ${data.setup} ${data.delivery}`
    }


}
button.addEventListener("click",generateJoke);
