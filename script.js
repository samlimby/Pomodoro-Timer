let pomoInterval;
let timeSecond = 0;
let timeMinute = 0;
const originalTitle = document.title;
const primaryButton = document.getElementById("start");

function startTimer() {
    pomoInterval = setInterval(updateTimer, 1000);
    primaryButton.className = "reset_button";
    primaryButton.innerText = "Reset";
    primaryButton.onclick = stopTimer;
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
    primaryButton.className = "primary_button";
    primaryButton.innerText = "Start";
    primaryButton.onclick = startTimer;
}



