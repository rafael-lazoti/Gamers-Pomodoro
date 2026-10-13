let countDown;
let timeLeft = 25 * 60; // total seocnds in 25 mins
let isRunning = false;

const timerDisplay = document.getElementById('timer-display');
const startButton = document.getElementById('start-btn');
const pauseButton = document.getElementById('pause-btn');
const resetButton = document.getElementById('reset-btn');

//Print to browsers console
//console.log("Hello");
//window.alert("Hello!");

//Update display func

function updateDisplay(){

    let minutes = Math.trunc(timeLeft / 60);
    let seconds = Math.trunc(timeLeft % 60);

    // Puts 0 in front on # if its < 0
   // if(minutes < 10){
  //      minutes = '0' + minutes;
   // }
   //Tesnary operators for if / else
    minutes < 10 ? '0' + minutes : minutes;
    seconds < 10 ? '0' + seconds : seconds;
 
    timerDisplay.textContent = `${minutes}:${seconds}`;

}

function startButtonClick(){
    //if startButton is running then return - else set it to true
    if (isRunning) return;
    isRunning = true;

    //makes it go down 1 every 1000miliseconds/1s
    countDown = setInterval(() => {
        timeLeft--;
        updateDisplay();

        if (timeLeft <= 0){
            clearInterval(countDown);
            timeLeft = 25 * 60;
            isRunning = false;

        }
    }
    ,1000)
}

function pauseButtonClick(){

     clearInterval(countDown);
     isRunning = false;   

}

function resetButtonClick(){
    clearInterval(countDown); 
     timeLeft = 25 * 60;
     isRunning = false; 
     updateDisplay();

    
}