const button = document.getElementById("convert");
const p = document.getElementById("result");
async function convert(){
    p.innerText="Loading..."
    const amount = Number(document.getElementById("amount").value);
    const from = document.getElementById("from").value;
    const to = document.getElementById("to").value;
    const response = await fetch(
        `https://api.frankfurter.dev/v2/rate/${from}/${to}`
    );
    if(response.ok===false){
        p.innerText="Something went wrong";
        return;
    }
    const data=await response.json();
    const rate=data.rate;
    const exchanged_amount=amount*rate;
    p.innerText=`${amount} ${from} = ${exchanged_amount} ${to}`;

}
button.addEventListener("click",convert);