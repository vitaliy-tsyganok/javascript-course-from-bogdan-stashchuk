/** ЗАДАЧА 56 - Деструктуризация объектов
 *
 * 1. Измените функцию "personInfo" так, чтобы получить в консоли такой же вывод
 *
 * 2. Объект, возвращаемый функцией "personInfo", должен содержать только сокращенные имена свойств
 */

const personInfo = (person) => {
	const {
		name,
		age: personAge,
		location: {country: origin, city: homeCity},
		friendsQty = 0,
		createdAtYear = new Date().getFullYear(),
	} = person;

	return {
		name,
		personAge,
		origin,
		homeCity,
		friendsQty,
		createdAtYear,
	};
};

const person = {
	name: 'Alice',
	age: 19,
	location: {
		country: 'England',
		city: 'London',
	},
}

const result = personInfo(person)

console.log(result)
/*
{
	name: "Alice",
	personAge: 19,
	origin: "England",
	homeCity: "London",
	friendsQty: 0,
	createdAtYear: *current year*
}
*/



const person_2 = {
	name: 'Alex',
	age: 25,
	location: {
		country: 'Russia',
		city: 'Moscow'
	}
}

const newPerson = (person) => {
	const {
		name,
		age: personAge,
		location: {country: personCountry, city: personCity},
		authorization = false,
	} = person;
	return {
		name,
		personAge,
		personCountry,
		personCity,
		authorization,
	};
}

console.log(newPerson(person_2));
/*
{
	name: 'Alex',
	personAge: 25,
	personCountry: 'Russia',
	personCity: 'Moscow',
	authorization: false,
}
*/