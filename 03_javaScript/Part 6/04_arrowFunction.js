const sum =  (a,b) => {
    console.log(a+b);
}


sum (2,3);

const hello =  () => {
    console.log("Hello World");
}

hello()

// implicit return 

const mul = (a,b) => (
    a*b
);

console.log(mul(4,3))