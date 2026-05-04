function custom() {
    minutes = parseInt(prompt("Enter the number of minutes:"));
    seconds = parseInt(prompt("Enter the number of seconds:"));
    totalSeconds = (minutes * 60) + seconds;
    timer(totalSeconds / 60);
}
function timer(minutes) {
timer = setTimeout(stop, minutes * 60 * 1000);
document.getElementById("timer").innerHTML = "Timer set for " + minutes + " minutes.";
//display the timer counting down on the page
}
function stop() {
clearTimeout(timer);
}