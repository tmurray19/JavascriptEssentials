var a = 5/7;
var b = 18/25;

// Anonymous functions
var theBiggest = function(){
    var result;
    a > b ? result = ["a", a] : result = ["b", b];
    return result;
}

console.log(theBiggest());

var first = 8/12;
var second = 45/4;

// Anonymous functions
var theLargest = (function(a, b){
    var result;
    a > b ? result = ["a", a] : result = ["b", b];
    return result;
})(first, second);



console.log(theLargest);
// console.log(theBiggest);
