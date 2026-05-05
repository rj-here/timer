function custom() {
    minutes = parseInt(prompt("Enter the number of minutes:"));
    seconds = parseInt(prompt("Enter the number of seconds:"));
    totalSeconds = (minutes * 60) + seconds;
    timer(totalSeconds / 60);
}
function timer(minutes) {
    let totalSeconds = minutes * 60;

    // Clear any existing timer interval
    if (typeof countdownInterval !== 'undefined') {
        clearInterval(countdownInterval);
    }

    countdownInterval = setInterval(() => {
        const mins = Math.floor(totalSeconds / 60);
        const secs = totalSeconds % 60;

        // Update the timer display
        document.getElementById("timer").innerHTML = `Time remaining: ${mins}m ${secs}s`;

        if (totalSeconds <= 0) {
            clearInterval(countdownInterval);
            stop();
            document.getElementById("timer").innerHTML = "The time is up!";
        }

        totalSeconds--;
    }, 1000);
}
function stop() {
clearTimeout(timer);
}