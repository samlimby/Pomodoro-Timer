const pomoInterval = setInterval(startTimer,1000);
let timeSecond = 0;
let timeMinute = timeSecond * 60;

function startTimer() {
    timeSecond++; 
    if (timeSecond > 59) {
        timeSecond = 0;
        timeMinute++;
    }
    const timerCount = timeMinute + ":" + timeSecond;
    if (timeMinute === 25) {
        alert("Time is up!");
        return stopTimer();
    }
    return document.getElementById("timer-count").innerText = timerCount;
}; 

function stopTimer() {
    timeSecond = 0;
    timeMinute = 0;
    clearInterval(pomoInterval);
    return document.getElementById("timer-count").innerText = "00:00";
};



