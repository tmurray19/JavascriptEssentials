const MYCONST = "A constant";
console.log(MYCONST);
// Illegal move
// MYCONST = 6;

function scopeShowcase(){
    let localVar = 2;

    if (localVar){
        let localVar = "I'm different.";
        console.log("Nested localVar: " + localVar);

    }
    console.log("scopeShowcase localVar: " + localVar);
}

scopeShowcase();
