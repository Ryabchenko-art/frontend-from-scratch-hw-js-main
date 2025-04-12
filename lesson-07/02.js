/*
 * Напишите функцию isNumeric, которая принимает строку и проверяет,
 * представляет ли эта строка корректное числовое значение.
 * Если строка является числом, функция должна возвращать true, в противном случае - false.
 */

function isNumeric(str) {
  return str.trim() !== '' && !isNaN(parseFloat(str)) && isFinite(str);
}
/*
1. str.trim() !== '' проверяет, что строка не пустая после удаления пробелов.
2. !isNaN(parseFloat(str)) проверяет, что значение можно преобразовать в число, и одновременно гарантирует, что значение не является NaN.
3. isFinite(str) проверяет, является ли значение конечным числом (исключает Infinity и NaN). */
console.log(isNumeric("123")) // Ожидаемый результат: true
console.log(isNumeric("12.3")) // Ожидаемый результат: true
console.log(isNumeric("123abc")) // Ожидаемый результат: false
console.log(isNumeric("abc")) // Ожидаемый результат: false
console.log(isNumeric(" ")) // Ожидаемый результат: false
