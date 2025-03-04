/*
 * Напишите код, который будет определять оценку студента (grade) в зависимости от балла (score).
 * Балл может быть целым числом от 0 до 100, а оценки 'F' (0 - 49), 'D' (50 - 69),
 'C' (70-79), 'B' (80 - 89), 'A' (90 - 100)
 * Результат сохраните в переменной grade.
 */

const score = 100 // тестовое значение, можно изменять
let grade

    while (grade)
        if (score <= 100) {
            if (score >= 90) {
                alert("A")
            } else if (score >= 80) {
                alert("B");
            } else if (score >= 70) {
                alert("C");
            } else if (score >= 50) {
                alert("D");
            } else {
                alert("F");
            }
        }
grade = score

// your code
