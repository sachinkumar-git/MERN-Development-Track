// Arithmetic Operators
let a = 10
let b = 5

console.log(a + b)  // Addition: 15
console.log(a - b)  // Subtraction: 5
console.log(a * b)  // Multiplication: 50
console.log(a / b)  // Division: 2
console.log(a % b)  // Modulo (Remainder): 0
console.log(a ** b) // Exponentiation (10 to the power of 5): 100000


//Unary Operators
let count = 7
count++ // Increment: adds 1 (count is now 8)
count-- // Decrement: subtracts 1 (count is now 7 again)
console.log(-count) // Unary negation: -7



// Assignment Operators
let x = 10   
x += 5       // Same as x = x + 5 (x is now 15)
x -= 2       // Same as x = x - 2 (x is now 13)
x *= 2       // Same as x = x * 2 (x is now 26)
console.log("Final x:", x)




//Comparison Operators
let age = 20
console.log(age > 18)   // Greater than: true
console.log(age === 20) // Strict equality (Checks value AND type): true
console.log(age !== 10) // Not equal: true
console.log(age <= 15)  // Less than or equal to: false



//Logical Operators

let hasCar = true
let hasLicense = false

// AND (&&): Both must be true
console.log(hasCar && hasLicense) // false

// OR (||): At least one must be true
console.log(hasCar || hasLicense) // true

// NOT (!): Reverses the result
console.log(!hasCar)              // false


