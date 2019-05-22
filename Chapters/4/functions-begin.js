function logBiggestFraction(a, b){
    a > b ? console.log("a: " + a) : console.log("b: " + b);
}


function findBiggestFraction(a, b){
    var result;
    a > b ? result = ["firstFraction", a] : result = ["secondFraction", b];
    return result;
}

var firstFraction = 3/4;
var secondFraction = 5/7;

var fractionResult = findBiggestFraction(firstFraction, secondFraction);

// findBiggestFraction(6/532, 7/5);

console.log("First fraction: " + firstFraction);
console.log("Second fraction: " + secondFraction);
console.log("Fraction " + fractionResult[0] + " with a value of " + fractionResult[1] + " is the largest.");
