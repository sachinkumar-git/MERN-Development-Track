const max = prompt("enter the max number");

const random = Math.floor(Math.random() * max) + 1;

let guess = prompt("guess the number");

while(true) {
    if(guess == "quit") {
        console.log("user quit");
        break;
    }

    if(guess == random) {
        console.log("you are right! congrats!!");
        break;
    } else if (guess < random) {
        // Hint for when the guess is lower than the target
        guess = prompt("Hint: Your guess was too SMALL. Please try again");
    } else {
        // Hint for when the guess is higher than the target
        guess = prompt("Hint: Your guess was too LARGE. Please try again");
    }
}