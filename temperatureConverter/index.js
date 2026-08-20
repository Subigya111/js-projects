const celsius=document.getElementById("celsius");
const fahrenheit=document.getElementById("fahrenheit");
const kelvin=document.getElementById("kelvin");



celsius.addEventListener("change",()=>{
    let cValue=Number(celsius.value);
    
    
    fValue=cValue*1.8+32;
    fahrenheit.value=fValue;
    kValue=cValue+273.72;
    kelvin.value=kValue;
});
fahrenheit.addEventListener("change",()=>{
    let fValue=Number(fahrenheit.value);
    cValue=(fValue-32)/1.8
    celsius.value=cValue;
    kValue=((fValue-32)/1.8)+273.72;
    kelvin.value=kValue;
});
kelvin.addEventListener("change",()=>{
    let kValue=Number(kelvin.value);
    cValue=( kValue - 273.32)
    celsius.value=cValue;
    fValue=((kValue - 273.32) * 1.8 + 32);
    fahrenheit.value=fValue;    
});