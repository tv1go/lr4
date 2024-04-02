function guessTheNumber() {
    const minNumber = 1;
    const maxNumber = 10;
    const attempts = 5;
    let randomNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
    let remainingAttempts = attempts;

    while (remainingAttempts > 0) {
        let userGuess = prompt(`Guess the number between ${minNumber} and ${maxNumber}. You have ${remainingAttempts} attempts.`);

        if (userGuess === null) {
            alert('Game cancelled. Goodbye!');
            return;
        }

        let guess = parseInt(userGuess);

        if (isNaN(guess) || guess < minNumber || guess > maxNumber) {
            alert('Invalid input. Please enter a number between 1 and 10.');
            continue;
        }

        if (guess === randomNumber) {
            alert(`Congratulations! You've guessed the number ${randomNumber} correctly.`);
            if (confirm('Do you want to play again?')) {
                guessTheNumber();
            } else {
                alert('Thanks for playing! Goodbye!');
            }
            return;
        } else if (guess < randomNumber) {
            alert('Too low! Try a higher number.');
        } else {
            alert('Too high! Try a lower number.');
        }

        remainingAttempts--;
    }

    alert(`You've run out of attempts! The correct number was ${randomNumber}.`);
    if (confirm('Do you want to play again?')) {
        guessTheNumber();
    } else {
        alert('Thanks for playing! Goodbye!');
    }
}

guessTheNumber();
