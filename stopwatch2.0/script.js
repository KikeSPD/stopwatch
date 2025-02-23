window.onload = function() {
    var seconds = 0;
    var milliseconds = 0;
    var appendMilliseconds = document.getElementById("milliseconds");
    var appendSeconds = document.getElementById("seconds");
    var start = document.getElementById("start");
    var stop = document.getElementById("stop");
    var reset = document.getElementById("reset");
    var Interval;

    start.onclick = function() {
        clearInterval(Interval);
        Interval = setInterval(startTimer, 10);
    }

    stop.onclick = function() {
        clearInterval(Interval);
    }

    reset.onclick = function() {
        clearInterval(Interval);
        milliseconds = 0;
        seconds = 0;
        appendMilliseconds.innerHTML = "00";
        appendSeconds.innerHTML = "00";
    }

    function startTimer() {
        milliseconds++;
        if (milliseconds <= 9) {
            appendMilliseconds.innerHTML = "0" + milliseconds;
        } else {
            appendMilliseconds.innerHTML = milliseconds;
        }
        if (milliseconds > 99) {
            seconds++;
            appendSeconds.innerHTML = (seconds <= 9) ? "0" + seconds : seconds;
            milliseconds = 0;
            appendMilliseconds.innerHTML = "00";
        }
        if (seconds > 9) {
            appendSeconds.innerHTML = seconds;
        }
    }
}
