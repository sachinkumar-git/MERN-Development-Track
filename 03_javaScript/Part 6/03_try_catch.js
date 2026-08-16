// console.log("hello");
// console.log("hello");
// console.log(a); // due to this error below code also will not executed 
// console.log("hello2");
// console.log("hello2");
// console.log("hello2");

// let a = 5;

console.log("hello");
console.log("hello");
try {
    console.log(a);
}catch (err){
    console.log("caught an error.. a is not defined")
    console.log(err);
}
console.log("hello2");
console.log("hello2");
console.log("hello2");
