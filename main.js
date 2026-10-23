
let secretNumber = 7;
let isGuessed = false;

for (let i = 0; i < 3; i++) {
    let userNum = Number(prompt("Угадайте число от 1 до 10:"));

    if (userNum === secretNumber) {
        console.log("Поздравляем! Вы угадали число!");
        isGuessed = true;
        break;
    } else if (userNum < secretNumber) {
        console.log("Загаданное число больше.");
    } else {
        console.log("Загаданное число меньше.");
    }

}

if (!isGuessed) {
    console.log("Попытки закончились. Ответ: 7");
}