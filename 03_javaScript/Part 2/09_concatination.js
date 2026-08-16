
let primary = ["red", "yellow", "blue"];
let secondary = ["orange", "green", "violet"];

// Note: concat() does NOT change the original arrays; it returns a NEW one
console.log(primary.concat(secondary)); 


let allColors = primary.concat(secondary);
console.log(allColors);

// The order matters in concatenation
console.log(secondary.concat(primary));


// REVERSE
// .reverse() reverses the elements in an array IN PLACE (it changes the original)
let fruits = ["mango", "apple", "litchi"];
fruits.reverse();
console.log(fruits); // Output: ["litchi", "apple", "mango"]


// --- 3. SLICE ---
// .slice(start, end) copies a portion of an array
// It does NOT change the original array
let colors = ["red", "yellow", "blue", "orange", "pink", "white"];

colors.slice();      // Copy of the whole array
colors.slice(2);     // From index 2 to end: ["blue", "orange", "pink", "white"]
colors.slice(2, 4);  // From index 2 to 3 (4 is excluded): ["blue", "orange"]
colors.slice(-2);    // Last 2 elements: ["pink", "white"]