const colors = [
    "#ef5777",
    "#575fcf",
    "#4bcffa",
    "#34e7e4",
    "#0be881",
    "#f53b57",
    "#3c40c6",
    "#0fbcf9",
    "#00d8d6",
    "#05c46b",
    "#ffc048",
    "#ffdd59",
    "#ff5e57",
    "#d2dae2",
    "#485460",
    "#ffa801",
    "#ffd32a",
    "#ff3f34"
  ];

  const button = document.querySelector("button");
  const body = document.querySelector("body");


  function colorEvent(){
    const randNum = Math.floor(Math.random() * colors.length);
    const randColor = colors[randNum];
    let randColor2 = colors[Math.floor(Math.random() * colors.length)];

    do{
        randColor2 = colors[Math.floor(Math.random() * colors.length)];
    }while(randColor === randColor2);

    body.style = `background:linear-gradient(to right, ${randColor}, ${randColor2})`;
    
  }

  button.addEventListener("click", colorEvent);