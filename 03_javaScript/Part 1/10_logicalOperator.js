// Logical AND (&&)

let hasTicket = true;
let hasPopcorn = true;

if (hasTicket && hasPopcorn) {
    console.log("Enjoy the movie!"); 
} else {
    console.log("Something is missing...");
}
// Output: Enjoy the movie! (Because BOTH are true)


//Logical OR (||)
let isVIP = false;
let hasCash = true;

if (isVIP || hasCash) {
    console.log("Welcome in!");
} else {
    console.log("Access denied.");
}
// Output: Welcome in! (Because at least ONE is true)

//Logical NOT (!)
let isRaining = false;

if (!isRaining) {
    console.log("Let's go to the park!");
}
// Output: Let's go to the park! (Because it is NOT raining)