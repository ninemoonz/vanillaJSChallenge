const clock = document.querySelector(".js-clock");
const pepe = document.querySelector(".pepe");

const christmas = new Date("Dec 24, 2022 00:00:00").getTime();


function countDown(){
    const today = new Date().getTime();
    const timeLeft = christmas - today;

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
    
    const strDays = String(days).padStart(3, "0");
    const strHours = String(hours).padStart(2, "0");
    const strMinutes = String(minutes).padStart(2, "0");
    const strSeconds = String(seconds).padStart(2, "0");

    clock.innerHTML = `${strDays} days ${strHours} hours ${strMinutes} minutes ${strSeconds} seconds left`;
}
countDown(); 
setInterval(countDown, 1000);

