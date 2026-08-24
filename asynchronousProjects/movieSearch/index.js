const input=document.getElementById("input");
const button=document.getElementById("button");
const p=document.getElementById("p");
const image=document.getElementById("image");
async function getMovie(){
    p.innerText="Loading..."
    const response=await fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=635df62d&s=${input.value}`)
    const data= await response.json();
    if(response.ok===false){
        p.innerText="Something went wrong";
        return;
    }
    console.log(data);
    const movie=data.Search[0];
    p.innerText=
    `
    Title : ${movie.Title}

    Type : ${movie.Type}

    Release Date : ${movie.Year}

    `
    image.src=movie.Poster
}
button.addEventListener("click",getMovie);