let pomoInterval;
let timeSecond = 0;
let timeMinute = 0;
const originalTitle = document.title;
const primaryButton = document.getElementById("start");
const manualNoteToggle = document.getElementById("manual_note-toggle");
const notionNoteToggle = document.getElementById("notion_note-toggle");
const confluenceNoteToggle = document.getElementById("confluence_note-toggle");

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

function manualNoteActive() {
    manualNoteToggle.className = "notes-toggle-button-active";
    manualNoteToggle.onclick = manualNoteDefault;
}

function manualNoteDefault() {
    manualNoteToggle.className = "notes-toggle-button";
    manualNoteToggle.onclick = manualNoteActive;
}

function notionNoteActive() {
    notionNoteToggle.className = "notes-toggle-button-active";
    notionNoteToggle.onclick = notionNoteDefault;
}

function notionNoteDefault() {
    notionNoteToggle.className = "notes-toggle-button";
    notionNoteToggle.onclick = notionNoteActive;
}

function confluenceNoteActive() {
    confluenceNoteToggle.className = "notes-toggle-button-active";
    confluenceNoteToggle.onclick = confluenceNoteDefault;
}

function confluenceNoteDefault() {
    confluenceNoteToggle.className = "notes-toggle-button";
    confluenceNoteToggle.onclick = confluenceNoteActive;
}



