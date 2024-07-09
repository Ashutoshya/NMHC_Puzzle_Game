let timerInterval;
let startTime = 0;
let elapsedTime = 0;

function startTimer() {
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(updateTimer, 10);
    document.getElementById('start-timer').disabled = true;
    document.getElementById('stop-timer').disabled = false;
    document.getElementById('reset-timer').disabled = true; // Disable reset while running
}

function stopTimer() {
    clearInterval(timerInterval);
    elapsedTime = Date.now() - startTime;
    document.getElementById('start-timer').disabled = false;
    document.getElementById('stop-timer').disabled = true;
    document.getElementById('reset-timer').disabled = false; // Enable reset after stopping
}

function resetTimer() {
    clearInterval(timerInterval);
    startTime = 0;
    elapsedTime = 0;
    document.getElementById('timer-display').textContent = "00:00:00";
    document.getElementById('start-timer').disabled = false;
    document.getElementById('stop-timer').disabled = true;
    document.getElementById('reset-timer').disabled = true; // Disable reset after resetting
}

function updateTimer() {
    const currentTime = Date.now();
    const timeElapsed = currentTime - startTime;
    const totalSeconds = Math.floor(timeElapsed / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    const milliseconds = Math.floor((timeElapsed % 1000) / 10);

    document.getElementById('timer-display').textContent = `${pad(minutes)}:${pad(seconds)}:${pad(milliseconds)}`;
}

function pad(num) {
    return num.toString().padStart(2, '0');
}

document.getElementById('start-timer').addEventListener('click', startTimer);
document.getElementById('stop-timer').addEventListener('click', stopTimer);
document.getElementById('reset-timer').addEventListener('click', resetTimer);
