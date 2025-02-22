window.onload = function() {
    var seconds=00;
    var milliseconds=00;
    var appendmilliseconds=document.getElementById("milliseconds");
    var appendseconds=document.getElementById("seconds");
    var start=document.getElementById("start");
    var stop=document.getElementById("stop");
    var reset=document.getElementById("reset");
    var Interval;

    buttonStart.onclick = function() {

        clearInterval(Interval);
        Interval = setInterval(startTimer, 10);
    }
}
buttonStop.onclick=function(){
    clearInterval(Interval);
}
buttonReset.onclick=function(){
    clearInterval(Interval);
    milliseconds="00";
    seconds="00";
    appendmilliseconds.innerHTML=milliseconds;
    appendseconds.innerHTML=seconds;
}

function startTimer(){
    milliseconds++;
    if(milliseconds<=9){
        appendmilliseconds.innerHTML="0"+milliseconds;
    }
    if(milliseconds>9){
        appendmilliseconds.innerHTML=milliseconds;
    }
    if(milliseconds>99){
        seconds++;
        appendseconds.innerHTML="0"+seconds;
        milliseconds=0;
        appendmilliseconds.innerHTML="0"+0;
    }
    if(seconds>9){
        appendseconds.innerHTML=seconds;
    }
}