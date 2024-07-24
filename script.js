let pomoInterval;
let timeSecond = 0;
let timeMinute = 0;
const originalTitle = document.title;

function startTimer() {
    pomoInterval = setInterval(updateTimer, 1000);
}

function updateTimer() {
    timeSecond++; 
    if (timeSecond > 59) {
        timeSecond = 0;
        timeMinute++;
    }
    const timerCount = `${String(timeMinute).padStart(2, '0')}:${String(timeSecond).padStart(2, '0')}`;
    document.getElementById("timer-count").innerText = timerCount;
    document.title = timerCount;

    if (timeMinute === 25) {
        alert("Time is up!");
        stopTimer();
    }
}

function stopTimer() {
    clearInterval(pomoInterval);
    timeSecond = 0;
    timeMinute = 0;
    document.getElementById("timer-count").innerText = "00:00";
    document.title = originalTitle; 
}



