let sum = 54; //Global Scope

function calSum(a, b) {
    let sum = a+b; //Function Scope
    console.log(sum);
}

calSum(1, 2);


// 1. BLOCK SCOPE

if (true) {
    let blockVariable = "I am trapped in here!";
    console.log(blockVariable); // This works perfectly.
}

// console.log(blockVariable); 
// ^ ERROR! If you uncomment this, it fails because 'let' keeps the variable locked inside the { } curly braces.


// 2. LEXICAL SCOPE
function parentFunction() {
    let parentVariable = "I am the parent!";

    function childFunction() {
        // Lexical scope means the child can "see" outside itself and use the parent's variables.
        console.log(parentVariable); // This works perfectly. Output: "I am the parent!"
    }
    
    childFunction();
}

parentFunction();