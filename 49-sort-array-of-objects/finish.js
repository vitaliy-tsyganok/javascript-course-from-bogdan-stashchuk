/** ЗАДАЧА 49 - Сортировка объектов в массиве
 *
 * 1. Создайте функцию "sortProductsByPrice" с одним параметром "products"
 *
 * 2. Эта функция должна отсортировать входной массив товаров
 * по цене каждого товара в порядке возрастания
 * и вернуть отсортированный массив
 *
 * 3. Оригинальный массив должен остаться без изменений
 */

const sortProductsByPrice = (products) => {
	// const newArray = products.map(product => product)
	const newArray = JSON.parse(JSON.stringify(products));
	newArray.sort((a, b) => a.price - b.price)
	return newArray;
}

const arrNums = [3, 12, 15, 5, 14, 12]

arrNums.sort((a, b) => a - b)

console.log(arrNums)

const inputProducts = [
	{
		title: 'Phone case',
		price: 23,
		quantity: 2,
		category: 'Accessories',
	},
	{
		title: 'Android phone',
		price: 150,
		quantity: 1,
		category: 'Phones',
	},
	{
		title: 'Headphones',
		price: 78,
		quantity: 1,
		category: 'Accessories',
	},
	{
		title: 'Sport Watch',
		price: 55,
		quantity: 2,
		category: 'Watches',
	},
]

const sortedProducts = sortProductsByPrice(inputProducts)

console.log(sortedProducts) // Массив отсортированных товаров

console.log(inputProducts) // Оригинальный массив не должен измениться


