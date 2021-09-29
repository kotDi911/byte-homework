let intervalId = null;
let timeMinute;

const timer = () => {
    let seconds = Math.trunc(timeMinute%60);
    let minutes = Math.trunc(timeMinute/60%60);
    let hours = Math.trunc(timeMinute/60/60%60);
    let hoursDisplay = (hours < 10)? '0' + hours:hours;
    let minutesDisplay = (minutes < 10)?'0' + minutes:minutes;
    let secondsDisplay = (seconds < 10)? '0' + seconds:seconds;

    timerContainer.textContent = hoursDisplay + ':' + minutesDisplay + ':' + secondsDisplay;

    console.log(timerContainer.textContent);
};

const start = (time) => {
    if(!intervalId){
        timeMinute = time;
        return new Promise((resolve) => {
            timer()
            console.log(timeMinute)
            intervalId = setInterval(() => {
                timeMinute--
                timer();
                console.log(timeMinute)
                if (timeMinute <= 0) {
                    clearInterval(intervalId);
                    resolve()
                }
            }, 1000);
        })
    }

};

const pause = () => {
    clearInterval(intervalId);
    intervalId = null;
};

const timerContainer = document.querySelector('.timer');
const startBtn = document.querySelector('.start');
const pauseBtn = document.querySelector('.pause');
startBtn.addEventListener('click', start);
pauseBtn.addEventListener('click', pause);

start(5).then(() => {
    console.log('Finisht timer!')
})