var min =0
var sec=0;
var msec = 0;
var interval;
var minHead = document.getElementById("min");
var secHead = document.getElementById("sec");
var milSec = document.getElementById("msec");
var startbtn = document.getElementById('start');

function timer ()
{
    msec++
    milSec.innerHTML= msec;

    if(msec>=100)
    {
sec++
secHead.innerHTML= sec;
msec =0;
    }
    else if(sec>=60){
        min++
        minHead.innerHTML =min;
        milSec.innerHTML = 0;
        secHead.innerHTML = 0;
        sec =0;
    }
}

function start(){
    interval= setInterval(timer, 10)
    startbtn.disabled = true;
}


function stop(){
    clearInterval(interval)
    startbtn.disabled = false;
}

function reset(){
    clearInterval(interval);
    min =0;
    sec=0;
    msec =0;
    milSec.innerHTML = '00';
    secHead.innerHTML = sec;
    minHead.innerHTML = min;
}
function record() {
    console.log(min+" : "+sec+" : "+msec);
}