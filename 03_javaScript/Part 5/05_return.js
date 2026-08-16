function sum (a,b){
    return a+b;
}

console.log(sum (2,3));
console.log(sum (sum(1,2),3));

function isAdult (age){
    if (age>= 18){
        return "adult";
    } else {
        return "not adult";
    }
    console.log("bye");
    
}


console.log(isAdult(25));