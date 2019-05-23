// References to elements in the HTML document
const testWrapper = document.querySelector(".test-wrapper");
const testArea = document.querySelector("#test-area");
const originText = document.querySelector("#origin-text p").innerHTML;
const resetButton = document.querySelector("#reset");
const theTimer = document.querySelector(".timer");
const currentErrors = document.querySelector(".err");

// Global timer variable
// Minutes, seconds, hundredths of seconds, thousandths of seconds
var timer = [0,0,0,0];
var interval;
var timerRunning = false;

var errors = 0;


// Add leading zero to numbers 9 or below (purely for aesthetics):
function leadingZero(time) {
    if (time <= 9) {
        time = "0" + time;
    }
    return time;
}

// Run a standard minute/second/hundredths timer:
function runTimer () {
    // Format time in terms of m:s:s/100:s/1000
    let currentTime = leadingZero(timer[0]) + ":" + leadingZero(timer[1]) + ":" + leadingZero(timer[2]);
    // Update timer to current time
    theTimer.innerHTML = currentTime;
    // Increment time
    timer[3]++;

    // Minutes
    timer[0] = Math.floor((timer[3]/100)/60);

    // Seconds
    timer[1] = Math.floor((timer[3]/100) - (timer[0]*60));

    // hundredths of a second
    timer[2] = Math.floor(timer[3] - (timer[1] * 100) - (timer[0] * 6000));


}

// Match the text entered with the provided text on the page:
function spellCheck () {
    let textEntered = testArea.value;
    let originTextMatch = originText.substring(0, textEntered.length);


    // Change border to green if correct
    if (textEntered == originText) {
        clearInterval(interval);
        testWrapper.style.borderColor = "#66ff33";
    }else{
        // Change to blue if everything so far is correct
        if (textEntered == originTextMatch) {
            testWrapper.style.borderColor = "#3366ff";
        } else {
            // Change to orange if incorrect
            // And increment the words per minute
            testWrapper.style.borderColor = "#cc6600";
            errors += 1;
            currentErrors.innerHTML = errors;
        }
    }
}

// Start the timer:
function start () {
    let textEnteredLength = testArea.value.length;
    // If the text has one character in it
    // Execute the runTimer function every 10 ms
    if (textEnteredLength === 0 && !timerRunning) {
        timerRunning = true;
        interval = setInterval(runTimer, 10);
    }
    console.log(textEnteredLength);
}

// Reset everything:
function reset () {
    // Clear all currently held variables
    clearInterval(interval);
    interval = null;
    timer = [0,0,0,0];
    timerRunning = false;
    errors = 0;


    // Restet the HTML
    testArea.value = "";
    theTimer.innerHTML = "00:00:00";
    testWrapper.style.oorderColor = "grey";
    currentErrors.innerHTML = "0";

}

// Event listeners for keyboard input and the reset button:
// The 'false' is for bubbling and capturing events
testArea.addEventListener("keypress", start, false);
testArea.addEventListener("keyup", spellCheck, false);
resetButton.addEventListener("click", reset, false);
