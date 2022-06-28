function createBigArray(num) {
	let i = 0;
	const array = [];
	while (i <= num) {
		array.push(Math.floor(Math.random() * 100))
		i++;
	}
	return array
}

const bigArray = createBigArray(1000000);
const startTime = new Date().getTime();
bigArray.sort((a, b) => a - b);
const endTime = new Date().getTime();
console.log('Sort Js, мс:', endTime - startTime);
