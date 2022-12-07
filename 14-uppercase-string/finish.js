/** ЗАДАЧА 14 - Строка заглавными буквами
 *
 * 1. Создайте переменную и присвойте ей любую строку
 *
 * 2. Убедитесь что значение этой переменной НЕ является экземпляром String
 * Используйте для этого оператор "instanceof"
 *
 * 3. Убедитесь что значение этой переменной имеет тип "string"
 *
 * 4. Создайте другую переменную и ее значением должно быть значение
 * первой переменной заглавными буквами
 *
 * 5. Выведите в консоль значение второй переменной
 */

const myName = 'Vitaliy'

console.log(myName instanceof String)

console.log(typeof myName);

const myNameToUpperCase = myName.toUpperCase();

console.log(myNameToUpperCase);

// Создание экземпляра String
// const myString = new String('Vitaliy')
// console.log(myString instanceof String);
// console.log(typeof myString);
// console.log(myString.toUpperCase());
// console.log('Пустая строка'.toUpperCase());