const input=document.getElementById("input")
const button=document.getElementById("button");
const p=document.getElementById("p");
const image=document.getElementById("image");
async function getCountry(){
    const response=await fetch (`https://countries.dev/name/${input.value}`);
    p.innerText="Loading...";
    const data= await response.json();
    const countryArr=data[0];
    // console.log(countryArr);
    const currency=countryArr.currencies[0];
    // console.log(languages);

    p.innerText=
    `
    Capital : ${countryArr.capital}

    Area : ${countryArr.area}

    Borders : ${countryArr.borders}

    Population : ${countryArr.population}

    Region : ${countryArr.region}

    Currency : ${currency.name} (${currency.symbol})

    Main Language : ${countryArr.languages[0].name}

    
    `
    image.src=countryArr.flags.png;

}
button.addEventListener("click",getCountry);