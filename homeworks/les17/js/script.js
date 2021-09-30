let intervalId = null;
let timeMinute;
let time = 0;

const timerContainer = document.querySelector('.timer_container');

const displayCount = (timeMinute) => {
    let seconds = Math.trunc(timeMinute%60);
    let minutes = Math.trunc(timeMinute/60%60);
    let hours = Math.trunc(timeMinute/60/60%60);

    let displayHours = (hours < 10) ? '0' + hours : hours;
    let displayMinutes = (minutes < 10) ? '0' + minutes : minutes;
    let displaySeconds = (seconds < 10) ? '0' + seconds : seconds;

    timerContainer.textContent = displayHours + ':' + displayMinutes + ':' + displaySeconds;
};

displayCount(time);

const start = (time) => {
    timeMinute = --time;
    return  new Promise((resolve) => {
        if(!intervalId){
            displayCount(timeMinute);
            intervalId = setInterval(() => {
                if(timeMinute !== 0){
                    timeMinute--;
                }
                displayCount(timeMinute);
                if (timeMinute <= 0) {
                    clearInterval(intervalId);
                    timeMinute = 0;
                    resolve("Успех")
                }
            }, 1000);
        }
    });
};
const pause = () => {
    clearInterval(intervalId);
    intervalId = null;
    time = timeMinute
};
const reset = () => {
    clearInterval(intervalId);
    intervalId = null;
    time = Number(prompt('Enter time'));
    displayCount(time);
    timerContainer.style = 'background: #e413d461; color: #05e200;'
    textFin.style = 'display: none;'
};

const startBtn = document.querySelector('.start');
const pauseBtn = document.querySelector('.pause');
const resetBtn = document.querySelector('.reset');
const textFin = document.querySelector('.text');
startBtn.addEventListener('click', () => {
    if(time > 0 || timeMinute > 0){
        start(time).then(() => {
            timerContainer.style = 'background: red; color: white;';
            textFin.style = 'display: inline-block'
        });
    }
});
pauseBtn.addEventListener('click', pause);
resetBtn.addEventListener('click', reset);
