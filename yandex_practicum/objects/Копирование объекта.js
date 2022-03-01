function copy(obj) {
	const res = {};
	Object.keys(obj).forEach(key => {
		res[key] = obj[key];
	});
	return res
}

const firstObj = {
	one: 1,
	two: 2,
	three: 3
};

const secondObj = firstObj;
const thirdObj = copy(firstObj);

console.log(firstObj); // { one: 1, three: 3, two: 2 }
console.log(secondObj); // { one: 1, three: 3, two: 2 }
console.log(thirdObj); // { one: 1, three: 3, two: 2 }

firstObj.four = 4;

console.log(firstObj); // { four: 4, one: 1, three: 3, two: 2 }
console.log(secondObj); // { four: 4, one: 1, three: 3, two: 2 }

// thirdObj не изменился
console.log(thirdObj); // { one: 1, three: 3, two: 2 }