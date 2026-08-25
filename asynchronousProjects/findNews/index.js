const input=document.getElementById("input");
const button=document.getElementById("button");
const p=document.getElementById("p");
async function getNews(){
    p.innerText="Loading..."
    const response=await fetch(`https://gnews.io/api/v4/search?q=${input.value}&lang=en&max=10&apikey=6b7c3744029100fe6641e957d642f409`);
    let data=await response.json();
    console.log(response.url);
    p.innerText=" ";
    let articles=data.articles;
    button1=document.getElementById("button1");
    articles.forEach((article)=>{
        const articleDiv = document.createElement("div");
        articleDiv.innerHTML = `
        <h2>${article.title}</h2>
        <p>${article.description}</p>
    `;
        const image = document.createElement("img");
        image.src = article.image;
        articleDiv.appendChild(image);
        document.body.appendChild(articleDiv);
    }) 
    
};

button.addEventListener("click",getNews);
