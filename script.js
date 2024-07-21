const timeSecond = 0;
const timeMinute = timeSecond * 60;
const timer = document.querySelector('.main_block-timer-title');

function start() {
    console.log("this is working");
}

function startTimer() {
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    timer.textContent = `${minutes}:${seconds}`;
}
