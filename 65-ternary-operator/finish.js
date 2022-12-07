/** ЗАДАЧА 65 - Тернарный оператор
 *
 * Измените функцию "isNumber", используя тернарный оператор
 */

// function isNumber(a) {
// 	return (typeof a === 'number') 
// 	? `${a} - это число`
// 	:	`${a} - это не число`
// }

// Стрелочная функция с неявным возвратом результата
const isNumber = (a) => 
	typeof a === 'number' 
		? `${a} - это число` 
		: `${a} - это не число`

console.log(isNumber(10))
// 10 - это число

console.log(isNumber('Привет'))
// Привет - это не число

console.log(isNumber(true))
// true - это не число
