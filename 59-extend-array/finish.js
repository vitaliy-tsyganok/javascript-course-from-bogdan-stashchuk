/** ЗАДАЧА 59 - Расширение массивов
 *
 * 1. Создайте новый класс "ExtendedArray", который должен расширять встроенный "Array"
 *
 * 2. Добавьте в новый класс два пользовательских метода:
 *  - "sum" - он должен возвращать сумму всех элементов массива
 *  - "onlyNumbers" - должен возвращать новый массив,
 * который будет содержать только числа из исходного массива
 *
 * 3. Создайте несколько экземпляров нового класса "ExtendedArray"
 * и протестируйте оба метода "sum" и "onlyNumbers".
 *
 * 4. Убедитесь, что остальные методы массивов такие,
 * как "forEach", "map" также доступны
 */

class ExtendedArray extends Array {
	sum() {
		return this.reduce((acc, num) => acc + num, 0);
	}
	onlyNumbers() {
		return this.filter(value => typeof value === 'number')
	}
}

const arrayExample = [1, 2, true, 'Moscow', 18, '65', 30, undefined, 0, '', 77];

const arrayCopy1 = new ExtendedArray(...arrayExample);
const arrayRezult1 = arrayCopy1.onlyNumbers();
console.log(arrayRezult1);

const arrayCopy2 = new ExtendedArray(...arrayRezult1);
const arrayRezult2 = arrayCopy2.sum();
console.log(arrayRezult2);

const arrayRezult3 = arrayCopy1.forEach((value) => console.log(value));
