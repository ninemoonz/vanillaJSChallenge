const body = document.querySelector("body");
const widthOutput = document.querySelector("#width");
const browserSize = window.innerWidth;

widthOutput.textContent = window.innerWidth;

function resizeEvent(){
    widthOutput.textContent = window.innerWidth;
    const browserSize = window.innerWidth;
    if(browserSize >= 700 && browserSize <= 1100){
        body.classList.add("default");
        body.classList.remove("increased-width");
        body.classList.remove("decreased-width");
    }else if(browserSize > 1100){
        body.classList.remove("default");
        body.classList.remove("decreased-width");
        body.classList.add("increased-width");
    }else if(browserSize < 700){
        body.classList.remove("default");       
        body.classList.remove("increased-width");
        body.classList.add("decreased-width");
    }

}

resizeEvent();

window.addEventListener("resize", resizeEvent);