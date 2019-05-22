// Exploring concept of 'Closure'

/*
A function inside a function that relies on outside variables to work.
*/

function doMath(){
    var a = 5;
    var b = 4;
    // var sum = a + b;

    function multiply(){
        var result = a*b;
        return result;
    }

    return multiply;
}

var theResult = doMath();

console.log("The result is " + theResult);
console.log("The result is " + theResult());

// Gives css ems
function giveMeEms(pixels) {
    var baseValue = 16;

    function doTheMath(){
        return pixels/baseValue;
    }

    return doTheMath;
}
var smallSize = giveMeEms(12);
var mediumSize = giveMeEms(18);
var largeSize = giveMeEms(24);
var xLargeSize = giveMeEms(32);

console.log("Small size: " + smallSize());
console.log("Medium size: " + mediumSize());
console.log("Large size:" + largeSize());
console.log("Extra large size: " + xLargeSize());
