/** ЗАДАЧА 48 - Использование метода "reduce" для создания объекта
 *
 * 1. Создайте функцию "quantitiesByCategories" с одним параметром "products"
 *
 * 2. Эта функция должна возвращать объект с ключами,
 * равными категориям, и значениями,
 * равными сумме всех количеств в каждой категории
 */

// Мое решение (неоптимальное)
// const quantitiesByCategories = (products) => {
// 	return products.reduce(
// 		(qntysByCategories, product) =>
// 			Object.keys(qntysByCategories).includes(product.category)
// 				? {...qntysByCategories, [product.category]: qntysByCategories[product.category] + product.quantity}
// 				: {...qntysByCategories, [product.category]: product.quantity},
// 		{}
// 	);
// };

// Оптимальное решение
const quantitiesByCategories = (products) => {
	return products.reduce((qntysByCategories, product) => {
		const {quantity, category} = product;
		qntysByCategories[category] = (qntysByCategories[category] || 0) + quantity;
		return qntysByCategories;
	}, {});
};

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
];

console.log(quantitiesByCategories(inputProducts));
/* {
   Accessories: 3,
   Phones: 1,
   Watches: 2
} */
