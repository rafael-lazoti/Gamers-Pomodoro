let countDown;
let timeLeft = 25 * 60;
let isRunning = false;

const timerDisplay = document.getElementById('timer-display');
const startButton = document.getElementById('start-btn');
const pauseButton = document.getElementById('pause-btn');
const stopButotn = document.getElementById('stop-btn');

//Update display func

function updateDisplay(){

    let minutes = timeLeft / 60;
    let seconds = timeLeft % 60;

    // Puts 0 in front on # if its < 0
    // ? is if-else
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    timerDisplay.textContent = `${minutes}:${seconds}`;

}

function startButtonClick(event){


}

function pauseButtonClick(){

}

function stopButtonClick(){
    
}