let arr = [1, 2, 3, 4, 5];

let print = function print(el) {
  console.log(el);
}

// Option 1: Passing a named function
arr.forEach(print);

// OR

// Option 2: Using an inline anonymous function
arr.forEach(function(el) {
  console.log(el);
});