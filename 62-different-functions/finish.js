/** ЗАДАЧА 62 - Разница в объявлении функций
 *
 * 1. Объясните разницу между двумя вариантами объявления функций
 *
 * 2. Покажите эту разницу, добавив дополнительный код под функциями
 *
 * 3. Также вызовите обе функции
 */

// Function Declaration можно вызывать до объявления функции
// console.log(firstFunction(1, 2)); // 3

function firstFunction(a, b) {
	return a + b
}

// Ошибка. Function Expression нельзя вызывать до объявления функции
// console.log(secondFunction(1, 2)); // Cannot access 'secondFunction' before initialization

const secondFunction = function (a, b) {
	return a + b
}