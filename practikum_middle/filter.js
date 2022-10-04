const students = [
	{
		name: 'Marat',
		age: 40,
		isJedi: true,
	},
	{
		name: 'Elenа',
		age: 38,
		isJedi: false,
	},
	{
		name: 'Daria',
		age: 17,
		isJedi: true,
	},
	{
		name: 'Irina',
		age: 62,
		isJedi: false,
	},
];

const returnAllJedis = (array) => {
	return array.filter(
		(item) => item.isJedi
	)
};

const returnAllOld = (array) => {
	return array.filter(
		(item) => item.age > 30
	)
}

const arrayToConsole = (array) => {
	for (const item of array) {
		console.log(item);
	}
}

const namesToArray = (array) => {
	const names = [];
	for (const item of array) {
		names.push(item.name)
	}
	return names;
};

const namesToArrayReduce = (array) => {
	return array.reduce(
		(accumulator, item) => {
			accumulator.push(item.name);
			return accumulator;
		}, []);
};

// console.log(returnAllJedis(students));
// console.log(returnAllOld(students));
// console.log(arrayToConsole(students));
// console.log(namesToArray(students));
console.log(namesToArrayReduce(students));

