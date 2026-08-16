// Array of strings: a collection of names
// let students = ["aman", "sachin", "kumar"];
// console.log(students);

// Array of numbers
let nums = [2, 4, 6, 8];

// Accessing an element: Arrays are 0-indexed, so [0] is the first element
console.log(nums[0]); // Output: 2

// Printing the entire array object
console.log(nums); // Output: [2, 4, 6, 8]

// The .length property tells you how many elements are in the array
console.log(nums.length); // Output: 4

// In JS, the 'typeof' an array is actually "object"
console.log(typeof(nums)); // Output: "object"

// Different types of arrays
let marks = [99, 85, 93, 76, 62];       // Number array
let names = ["adam", "bob", "catlyn"];  // String array
let info = ["aman", 25, 6.1];           // Mixed array (Strings and Numbers)

// Initializing an empty array to be filled later
let newArr = [];
console.log(newArr); // Output: []

// You can check the length of an array literal directly without storing it in a variable
console.log([0, 1, 2, 3].length); // Output: 4

// Accessing the first element of the 'names' array
console.log(names[0]); // Output: "adam"

// Accessing the first character of the first element (String within an Array)
// names[0] is "adam", and [0] of "adam" is "a"
console.log(names[0][0]); // Output: "a"

// Getting the length of the string stored at index 1 ("bob")
console.log(names[1].length); // Output: 3