let timeSecond = 0;
let timeMinute = timeSecond * 60;
let timerCount = timeMinute + ":" + timeSecond;

function start() {
    timeSecond++;
    setInterval(start, 1000);
    console.log(timerCount);
    return document.getElementById("timer-count").innerHTML = timeSecond;
}



