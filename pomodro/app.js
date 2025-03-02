const bell = new Audio("/preview.mp3");
const startBtn = document.querySelector(".btn-start");
const session = document.querySelector(".minutes");
let myInterval;
let state = true;

const appTimer = () =>{
const sessionAmount = Number.parseInt(session.textContent);

if(state){
    state=false;
    let totalSeconds = sessionAmount*60;

   const updateSeconds= () =>{
        const minuteDiv = document.querySelector(".minutes");
        const secondDiv = document.querySelector(".seconds");

        totalSeconds--;

        let minutesLeft = Math.floor(totalSeconds/60);
        let secondsLeft = totalSeconds%60;

        if(secondsLeft < 10){
            secondDiv.textContent = '0' + secondsLeft;
        }else{
            secondDiv.textContent = secondsLeft;
        }
        minuteDiv.textContent = `${minutesLeft}`;

        if(minutesLeft === 0 && secondsLeft === 0){
            bell.play();
            clearInterval(myInterval);
        }
  }
    myInterval = setInterval(updateSeconds,1000);
}else{
    alert("session has started");
}


}
startBtn.addEventListener("click",appTimer);

