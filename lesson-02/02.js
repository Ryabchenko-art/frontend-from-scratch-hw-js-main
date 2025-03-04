/*
* Напишите код, который симулирует бросок двух шестигранных игральных кубиков и определяет,
выпал ли выигрышный дубль.
* В переменные dice1 и dice2 должны присваиваться случайные целые числа от 1 до 6.
* Дубль считается выигрышным, если на обоих дайсах выпало одно и то же число, и это число больше 3.
* Полученное булево значение сохраните в переменной isWinningDouble

* Для успешного прохождения тестов не меняйте названия переменных!
*/

let dice1 = (Math.floor(Math.random() * 7) + 1);// your code
let dice2 = (Math.floor(Math.random() * 7) + 1);// your code
let isWinningDouble = true;
while (isWinningDouble){
    if ((dice1 >= 3) === (dice2 >=3)) {
            alert('Первый бросок: ' + dice1)
            alert('Второй бросок: ' + dice2)
            if (isWinningDouble) {
                alert('Выигрышный дубль!')
            } else {
                alert('Не выигрышный дубль.')
            }
        }
    }

/*
console.log('Первый бросок: ' + dice1)
console.log('Второй бросок: ' + dice2)
if (isWinningDouble) {
  console.log('Выигрышный дубль!')
} else {
  console.log('Не выигрышный дубль.')
}
(dice1 === 4 && dice2 === 4 || dice1 === 5 && dice2 === 5 || dice1 === 6 && dice2 === 6)
*/