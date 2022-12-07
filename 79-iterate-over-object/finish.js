/** ЗАДАЧА 79 - Перебор свойств объекта
 *
 * 1. Создайте функцию "sumObjectValues", которая будет суммировть
 * все значения свойств, которые являются числами.
 *
 * 2. Сумму чисел необходимо вернуть из функции
 *
 * 3. Убедитесь, что итерация выполняется только
 * по собственным свойствам объекта
 */

const objectWithNumbers = {
	a: 10,
	b: 20,
	c: 'string',
	d: 12,
}

// Вариант 1. Object.values + forEach
// const sumObjectValues = (objectWithNumbers) => {
// 	let sum = 0;

// 	Object.values(objectWithNumbers).forEach(value => {
// 		if (typeof value === 'number') sum += value
// 	});

// 	return sum
// }

// Вариант 2. Object.values + reduce
// const sumObjectValues = (objectWithNumbers) => {
// 	return Object.values(objectWithNumbers)
// 		.reduce((sum, value) => 
// 			(typeof value === 'number') 
// 				? sum + value
// 				: sum
// 		, 0)
// }

// Вариант 3. Object.entries
const sumObjectValues = (objectWithNumbers) => {
	let sum = 0;

	Object.entries(objectWithNumbers).forEach(prop => {
		if (typeof prop[1] === 'number') sum += prop[1];
	})

	return sum;
}

const result = sumObjectValues(objectWithNumbers)
console.log(result)
//42
