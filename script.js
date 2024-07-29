let pomoInterval;
let timeSecond = 0;
let timeMinute = 0;
const originalTitle = document.title;
const primaryButton = document.getElementById("start");
const manualNoteToggle = document.getElementById("manual_note-toggle");
const notionNoteToggle = document.getElementById("notion_note-toggle");
const confluenceNoteToggle = document.getElementById("confluence_note-toggle");

let manualNoteActiveState = false;
let notionNoteActiveState = false;
let confluenceNoteActiveState = false;



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

function manualNote() {
    notionNoteActiveState = false;
    confluenceNoteActiveState = false;
    notionNoteToggle.className = "notes-toggle-button";
    confluenceNoteToggle.className = "notes-toggle-button";
    notionNoteToggle.onclick = notionNote;
    confluenceNoteToggle.onclick = confluenceNote;

    if (manualNoteActiveState === false) {
        manualNoteActiveState = true;
        manualNoteToggle.className = "notes-toggle-button-active";
        manualNoteToggle.onclick = manualNoteDefault;
    } else {
        manualNoteActiveState = false; 
        manualNoteToggle.className = "notes-toggle-button";
        manualNoteToggle.onclick = manualNoteActive;
    }
}

function notionNote() {
    manualNoteActiveState = false;
    confluenceNoteActiveState = false;
    manualNoteToggle.className = "notes-toggle-button";
    confluenceNoteToggle.className = "notes-toggle-button";
    manualNoteToggle.onclick = manualNote;
    confluenceNoteToggle.onclick = confluenceNote;

    if (notionNoteActiveState === false) {
        notionNoteActiveState = true;
        notionNoteToggle.className = "notes-toggle-button-active";
        notionNoteToggle.onclick = notionNoteDefault;
    } else {
        notionNoteActiveState = false; 
        notionNoteToggle.className = "notes-toggle-button";
        notionNoteToggle.onclick = notionNoteActive;
    }
}

function confluenceNote() {
    manualNoteActiveState = false;
    notionNoteActiveState = false;
    manualNoteToggle.className = "notes-toggle-button";
    notionNoteToggle.className = "notes-toggle-button";
    manualNoteToggle.onclick = manualNote;
    notionNoteToggle.onclick = notionNote;

    if (confluenceNoteActiveState === false) {
        confluenceNoteActiveState = true;
        confluenceNoteToggle.className = "notes-toggle-button-active";
        confluenceNoteToggle.onclick = confluenceNoteDefault;
    } else {
        confluenceNoteActiveState = false; 
        confluenceNoteToggle.className = "notes-toggle-button";
        confluenceNoteToggle.onclick = confluenceNoteActive;
    }
}






