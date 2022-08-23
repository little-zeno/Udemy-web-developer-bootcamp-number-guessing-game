let maximum = parseInt(prompt("Enter the maximum number!"));

// Here should use While as we want to check the maximum number until it becomes a valid number
while (!maximum) {
    maximum = parseInt(prompt("Enter a valid number!"));
}

// To generate a target number which will be 0 to the maximum number
const targetNum = Math.floor(Math.random() * maximum + 1);
console.log(targetNum);

// To enter your first guess and count the attempts
// Here initially I put parseInt(prompt..) which means that if my first guess is 'q' to quit the game, guess would = NaN and it will continue to loop and run in the final else circumstances instead of quiting.
// By removing parseInt here, if you enter 'q', guess = 'q' and while loop parseInt(guess) is NaN which doesnt equal to targetNum but guess is still 'q' to quit the game immediately.
let guess = prompt("Enter your first guess!");
let attempts = 1;

while (parseInt(guess) !== targetNum) {
    if (guess === 'q') {
        console.log("Ok you quit!");
        break;
    }
    attempts++;
    if (guess > targetNum) {
        guess = prompt("Too high! Enter a new guess:");
    } else if (guess < targetNum) {
        guess = prompt("Too low! Enter a new guess:");
    } else {
        guess = prompt(`Your guess is ${guess}, which is not higher or lower, please enter a valid number:`);
    }
}

if (guess !== 'q') {
    console.log(`You got it! It took you ${attempts} guesses`);
} 
