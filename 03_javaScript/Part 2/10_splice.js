let colors = ["red", "yellow", "blue", "orange", "pink", "white"];

// 1. Removing elements from a starting index
// colors.splice(4) removes everything from index 4 onwards
let deleted = colors.splice(4); 
console.log(deleted); // ["pink", "white"]
console.log(colors);  // ["red", "yellow", "blue", "orange"]

// 2. Removing a specific number of elements
// colors.splice(0, 1) starts at index 0 and removes 1 element
colors.splice(0, 1); 
console.log(colors); // ["yellow", "blue", "orange"]

// 3. Replacing elements
// splice(start, deleteCount, item0...itemN)
// Starts at index 0, removes 1 element ("yellow"), and adds "black" and "grey"
colors.splice(0, 1, "black", "grey");
console.log(colors); // ["black", "grey", "blue", "orange"]

