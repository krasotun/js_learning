function swap(obj) {
	const res = {};
	Object.keys(obj).forEach(key => {
		const value = obj[key];
		res[value] = key;
	});
	return res;
}
const myObj = {
	first: 1,
	second: 2,
	third: 3
};
swap(myObj);
console.log(myObj); // { first: 1, second: 2, third: 3 }
console.log(swap(myObj)); // { 1: "first", 2: "second", 3: "third" }