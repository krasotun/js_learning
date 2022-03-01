function evolution(obj, key, value) {
	const newObject = Object.assign({}, obj);
	newObject[key] = value;
	return newObject;
}
const fish = {
	eggs: 'икра',
	eyes: 2,
	home: 'вода'
};

const frog = evolution(fish, 'legs', 4);
console.log('лягушка: ', frog);
// лягушка: { eggs: "икра", eyes: 2, home: "вода", legs: 4 }
console.log('рыба: ', fish);
// рыба: { eggs: "икра", eyes: 2, home: "вода", legs: 4 }
// рыбы тоже изменились!