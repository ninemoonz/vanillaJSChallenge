const generatorForm = document.querySelector("#jsGenerator");
const rangeInput = document.querySelector("#jsGenerator #jsRange");
const guessInput = document.querySelector("#jsGenerator #jsGuessInput");
const guessButton = document.querySelector("#jsGenerator #jsPlayButton");

const chosenNumber = document.querySelector("#jsChosen");
const playerNumber = document.querySelector("#jsChosen .playerNumber");
const machineNumber = document.querySelector("#jsChosen .machineNumber");

const result = document.querySelector("#jsResult");
const resultText = document.querySelector("#jsResult #resultText");
const sharedNumberBox = document.querySelector("#jsSharedNumberBox #jsSharedNumber");

function submitEvent(event) {
    event.preventDefault();
    
    //values for range and guess input
    const rangeValue = rangeInput.value;
    const value = guessInput.value; 

    localStorage.setItem("range", rangeValue);
    localStorage.setItem("value", value);

    const savedRangeValue = localStorage.getItem("range", 10);
    const savedGuessValue = localStorage.getItem("value", 10);

    const intRange = parseInt(savedRangeValue);
    const intGuess = parseInt(savedGuessValue);

    if(intGuess > intRange){
        alert(`Please enter number between 0 to ${savedRangeValue}`);
        sharedNumberBox.classList.add("hidden");
        chosenNumber.classList.add("hidden");
        result.classList.add("hidden");
    }else{
        sharedNumberBox.classList.remove("hidden");
        chosenNumber.classList.remove("hidden");
        result.classList.remove("hidden");
    }
    
    //values for shared number and machine number
    const sharedNumber = Math.ceil(Math.random() * rangeValue);
    const machineNum = Math.ceil(Math.random() * rangeValue);

    //absolute values of difference
    const absPlayer = Math.abs(sharedNumber - value);
    const absMachine = Math.abs(sharedNumber - machineNum);

    playerNumber.innerText = `You chose: ${value} (closeness to shared number is ${absPlayer})`;
    machineNumber.innerText = `Machine chose: ${machineNum} (closeness to shared number is ${absMachine})`;
    sharedNumberBox.innerText = `Shared Number is ${sharedNumber}`;

    if(absPlayer < absMachine){
        resultText.innerText = "Player wins!";
    }else if(absPlayer > absMachine){
        resultText.innerText = "Machine wins!";
    }else{
        resultText.innerText = "It's a draw!";
    }

}

generatorForm.addEventListener("submit", submitEvent);

