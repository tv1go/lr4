function startGame() {
    const minNumber = 1;
    const maxNumber = 10;
    const attempts = 5;
    let randomNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
    let remainingAttempts = attempts;

    while (remainingAttempts > 0) {
        let userInput = prompt(`Угадайте число от ${minNumber} до ${maxNumber}. У вас есть ${remainingAttempts} попыток!`);

        if (userInput === null || userInput === "") {
            alert('Игра отменена');
            return;
        }

        let userGuess = parseInt(userInput);

        if (isNaN(userGuess) || userGuess < minNumber || userGuess > maxNumber) {
            alert('Неправильно, пожалуйста введите числа от 1 до 10');
            continue;
        }

        if (userGuess === randomNumber) {
            alert(`Поздравляю! Вы угадали число ${randomNumber} правильно`);
            if (confirm('Хотите сыграть еще раз?')) {
                startGame();
            } else {
                alert('Спасибо за игру!');
            }
            return;
        } else if (userGuess < randomNumber) {
            alert('Мало, попробуйте больше');
        } else {
            alert('Много, попробуйте меньше');
        }

        remainingAttempts--;
    }

    alert(`У вас закончились попытки! Правильный ответ: ${randomNumber}`);
    if (confirm('Хотите сыграть еще раз?')) {
        startGame();
    } else {
        alert('Спасибо за игру!');
    }
}

startGame();
