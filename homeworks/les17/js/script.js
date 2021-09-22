let intervalId = null;
let timeMinute = 360;
const start = () => {
    if(!intervalId){
        intervalId = setInterval(() => {
            let seconds = Math.trunc(timeMinute%60);
            let minutes = Math.trunc(timeMinute/60%60);
            let hour = Math.trunc(timeMinute/60/60%60);
            if (timeMinute <= 0) {
                clearInterval(intervalId);
                alert("Время закончилось");
                timerContainer.innerHTML = '00:00:00';
            } else { // Иначе
                if(hour < 10) hour = '0' + hour;
                if(minutes < 10) minutes = '0' + minutes;
                if(seconds < 10) seconds = '0' + seconds;

                let strTimer = `${hour}:${minutes}:${seconds}`;
                timerContainer.innerHTML = strTimer;
            }
            --timeMinute;
            console.log(timeMinute);
        },1000);
    }
};
const pause = () => {
    clearInterval(intervalId);
    intervalId = null;
};

const timerContainer = document.createElement('div');
const startBtn = document.createElement('button');
const pauseBtn = document.createElement('button');
startBtn.style = 'margin-right: 5px; border: 2px solid black; background: #04ff00c2; border-radius: 40%;';
pauseBtn.style = 'margin-right: 5px; border: 2px solid black; background: #ff8100db; border-radius: 20%;';
startBtn.innerText = 'Start';
pauseBtn.innerText = 'Pause';
timerContainer.style = 'border: 2px solid black; padding: 0 10px; font-size: 36px; background: #e413d461; border-radius: 15px;'
timerContainer.innerHTML = '00:00:00';
startBtn.addEventListener('click', start);
pauseBtn.addEventListener('click', pause);

document.body.append(startBtn, pauseBtn, timerContainer);
document.body.style = 'display: flex;';

