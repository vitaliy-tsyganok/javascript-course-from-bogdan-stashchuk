/** ЗАДАЧА 34 - Массив объектов
 *
 * 1. Создайте массив с 3 объектами "cars"
 *
 * 2. Каждый объект должен иметь три свойства
 *  - carBrand (строка)
 *  - price (число)
 *  - isAvailableForSale (логическое значение)
 *
 * 3. Добавьте еще один объект в массив
 *
 * 4. Выведите результирующий массив в консоль
 */

const cars = [
	{
		carBrand: 'Audi',
		price: 2450000,
		isAvailableForSale: true,
	},
	{
		carBrand: 'Mazda',
		price: 2100000,
		isAvailableForSale: false,
	},
	{
		carBrand: 'Toyota',
		price: 2350000,
		isAvailableForSale: false,
	}
]

cars.push(
	{
		carBrand: 'Lada',
		price: 750000,
		isAvailableForSale: true,
	}
)

console.log(cars)
