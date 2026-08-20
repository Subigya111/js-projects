const buttons=document.querySelectorAll(".buttons");
const result=document.getElementById("result");
const showUserResult=document.getElementById("user-score");
const showComputerResult=document.getElementById("computer-score");
let userResult;let compRes;
let userScore=0; let computerScore=0;

buttons.forEach((button)=>{
    button.addEventListener("click",(e)=>{
        userResult=(e.target.id);
        compRes= computerResult();
        console.log(userResult);
    console.log(compRes);
        play();


    });
});
function computerResult(){
    const computer= ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * computer.length);
    const random = computer[randomIndex];
    return (random);
};
function play(){
    if(userResult===compRes){
        result.innerText="It is a tie";
    }
    
    else if(
        (userResult==="rock"&&compRes==="scissors")||
        (userResult==="scissors"&&compRes==="paper")||
        (userResult==="paper"&&compRes==="rock")
    ){
        userScore++;
        showUserResult.textContent=userScore;
        result.innerText="You win! " + userResult +" beats "+compRes;
    }
    else{
        computerScore++;
        showComputerResult.textContent=computerScore;
        result.innerText="Computer wins! " + compRes +" beats "+userResult;

    }
}