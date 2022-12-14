/** ЗАДАЧА 72 - Копия массива
 *
 * Создайте копию массива.
 * При изменении копии массива оригинальный массив не должен изменяться
 */

const a = [1, 2, 3]

// ВАРИАНТ 1. Создание копии с помощью spread оператора
// const b = [...a]

// ВАРИАНТ 2. Создание копии с помощью метода from()
const b = Array.from(a);

// ВАРИАНТ 3. Создание копии с помощью JSON преобразований
// const b = JSON.parse(JSON.stringify(a))

b.push('newElement')

console.log(a)
// [1, 2, 3]

console.log(b)
// [1, 2, 3, "newElement"]
