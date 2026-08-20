const bill=document.getElementById("bill");
const tip=document.getElementById("tip");
const button=document.getElementById("calculate");
const total=document.getElementById("total");

function calculateBill(){
    const billValue=parseInt(bill.value);
    const tipValue=parseInt(tip.value);
    const finalBill= billValue*(1+tipValue/100);
    total.innerText=finalBill.toFixed(2);
}
button.addEventListener("click",calculateBill);