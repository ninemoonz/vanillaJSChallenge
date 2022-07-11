const generatorForm = document.querySelector("#jsGenerator");
const rangeInput = document.querySelector("#jsGenerator #jsRange");
const guessInput = document.querySelector("#jsGenerator #jsGuessInput");
const guessButton = document.querySelector("#jsGenerator #jsPlayButton");

const playerNumber = document.querySelector("#jsChosen .playerNumber");
const machineNumber = document.querySelector("#jsChosen .machineNumber");
const resultText = document.querySelector("#jsResult #resultText");
const sharedNumberBox = document.querySelector("#jsSharedNumberBox #jsSharedNumber");

const playerPoint = document.querySelector("#playerPoints");
const machinePoint = document.querySelector("#machinePoints");

function submitEvent(event) {
    event.preventDefault();
    
    const rangeValue = rangeInput.value;
    const value = guessInput.value; 
    
    const sharedNumber = Math.ceil(Math.random() * rangeValue);
    const randNum = Math.ceil(Math.random() * rangeValue);

    
    const absPlayer = Math.abs(sharedNumber - value);
    console.log(absPlayer);
    const absMachine = Math.abs(sharedNumber - randNum);
    console.log(absMachine);

    playerNumber.innerText = `You chose: ${value} (closeness to shared number is ${absPlayer})`;
    machineNumber.innerText = `Machine chose: ${randNum} (closeness to shared number is ${absMachine})`;
    sharedNumberBox.innerText = `Shared Number is ${sharedNumber}`;

    if(value > rangeValue){
        alert(`please enter number between 0 to ${rangeValue}`);
    }else if(absPlayer < absMachine){
        resultText.innerText = "Player wins!";
        
    }else if(absPlayer > absMachine){
        resultText.innerText = "Machine wins!";
        
    }else{
        resultText.innerText = "It's a draw!";
    }


}

generatorForm.addEventListener("submit", submitEvent);

