const ROCK = "rock"; 
const PAPER = "paper"; 
const SCISSOR = "scissor";
const LIZARD = "lizard";
const SPOCK = "spock";

const TIE = 0; 
const WIN = 1; 
const LOST = 2; 


const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorBtn = document.getElementById("scissor");
const lizardBtn = document.getElementById("lizard");
const spockBtn = document.getElementById("spock");
const resultText = document.getElementById("star-text");
const userImg = document.getElementById("user-img");
const machineImg = document.getElementById("machine-img");

rockBtn.addEventListener("click", () =>{
    play(ROCK);
}); 

paperBtn.addEventListener("click", () =>{
    play(PAPER);
}); 

scissorBtn.addEventListener("click", () =>{
    play(SCISSOR);
}); 
lizardBtn.addEventListener("click", () =>{
    play(LIZARD);
}); 
spockBtn.addEventListener("click", () =>{
    play(SPOCK);
}); 

function play(userOption){
    userImg.src = "img/"+userOption+".png";
    resultText.innerHTML ="Choosing!"; 

    let machineOption =  calcMachineOption();

    const interval =  setInterval(function (){
        machineOption = calcMachineOption();
        machineImg.src = "img/" + machineOption + ".png";
    }, 100);

        setTimeout(function (){

            clearInterval(interval);

        const result = calResult(userOption, machineOption);

        switch (result){
            case TIE: 
            resultText.innerHTML ="You have tied!"
            break; 
    
            case WIN: 
            resultText.innerHTML ="You win! "
            break; 
    
            case LOST: 
            resultText.innerHTML ="You lost!"
            break;
        }
    },1000)

}

function calcMachineOption(){
    const number = Math.floor(Math.random()*5);

    switch (number){
        case 0: 
        return ROCK;
        case 1: 
        return PAPER; 
        case 2: 
        return SCISSOR;
        case 3: 
        return LIZARD;
        case 4: 
        return SPOCK;

    }
}

function calResult(userOption, machineOption){

    if (userOption === machineOption){
        return TIE;
    }
    // OPTIONS PLAYING WITH ROCK

    else if (userOption === ROCK) {
        if (machineOption === PAPER) return LOST; 
        if (machineOption === SPOCK) return LOST; 
        if (machineOption === SCISSOR) return WIN; 
        if (machineOption === LIZARD) return WIN; 
    }
    //  OPTIONS PLAYING WITH PAPER 

    else if (userOption === PAPER) {
        if (machineOption === SCISSOR) return LOST; 
        if (machineOption === LIZARD) return LOST; 
        if (machineOption === ROCK) return WIN; 
        if (machineOption === SPOCK) return WIN; 
    }
    //  OPTIONS PLAYING WITH SCISSOR

     else if (userOption === SCISSOR) {
         if (machineOption === ROCK) return LOST; 
         if (machineOption === SPOCK) return LOST; 
         if (machineOption === PAPER) return WIN; 
         if (machineOption === LIZARD) return WIN; 
        }
    //  OPTIONS PLAYING WITH LIZARD

     else if (userOption === LIZARD) {
         if (machineOption === ROCK) return LOST; 
         if (machineOption === SCISSOR) return LOST; 
         if (machineOption === SPOCK) return WIN; 
         if (machineOption === PAPER) return WIN; 
        }
    //  OPTIONS PLAYING WITH SPOCK

     else if (userOption === SPOCK) {
         if (machineOption === LIZARD) return LOST; 
         if (machineOption === PAPER) return LOST; 
         if (machineOption === SCISSOR) return WIN; 
         if (machineOption === ROCK) return WIN; 
        }

}

