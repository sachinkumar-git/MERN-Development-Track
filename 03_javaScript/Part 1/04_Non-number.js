// --- Comparison for Non-Numbers (Strings) ---
// JavaScript compares strings based on Unicode/ASCII values.
// Lowercase letters have higher values than Uppercase letters.

console.log('a' > 'A'); // true  ('a' is 61, 'A' is 41 in hex)
console.log('a' > 'b'); // false ('a' is 61, 'b' is 62)
console.log('b' < 'c'); // true  ('b' is 62, 'c' is 63)
console.log('B' < 'C'); // true  ('B' is 42, 'C' is 43)
console.log('*' < '&'); // false