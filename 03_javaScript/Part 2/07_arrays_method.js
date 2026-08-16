
// PUSH & POP METHODS 
let cars = ["audi", "bmw", "xuv", "maruti"];

// .push() adds an element to the END of the array
cars.push("toyota");
console.log(cars); 

cars.push("ferrari");
console.log(cars); 

// .pop() removes the LAST element from the array
let removedCar1 = cars.pop(); // removes "ferrari"
console.log(removedCar1);     // "ferrari"

let removedCar2 = cars.pop(); // removes "toyota"
console.log(removedCar2);     // "toyota"

// Final state of the cars array
console.log(cars); 


console.log(cars.unshift("toyota"));
console.log(cars); 
console.log(cars.unshift("ferrari"));
console.log(cars); 
console.log(cars.shift());
console.log(cars); 

