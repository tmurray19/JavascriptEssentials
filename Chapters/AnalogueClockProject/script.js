const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

function runTheClock(){
    var date = new Date();

    let hr = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();

    console.log("The time is " + hr + ":" + min + ":" + sec);

    let secPosition = sec*360/60;
    let minPosition = (min*360/60) + (secPosition/60);
    let hrPosition = (hr*360/12) + (min*(360/60)/12);

    HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";
    MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)";
    SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";
}

/* Alterative version for smooth movement
Uncomment transition: transform .5s ease-in-out; in style.css
var date = new Date();

let hr = date.getHours();
let min = date.getMinutes();
let sec = date.getSeconds();

let secPosition = sec*360/60;
let minPosition = (min*360/60) + (secPosition/60);
let hrPosition = (hr*360/12) + (min*(360/60)/12);

function runTheClock(){

    hrPosition = hrPosition + (3/360);
    minPosition = minPosition + (6/60);
    secPosition = secPosition + 6;

    HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";
    MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)";
    SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";
}
*/

var interval = setInterval(runTheClock, 1000)
