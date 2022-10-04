const array = [
	'#000000', '#000000', '#123456',
	'#000000', '#000000', '#123456', '#00ffff', '#FFFFFF',
	'#123456', '#FFFFFF',
	'#4444cc', '#000000', '#000000', '#44CC44', '#000000', '#CC4444',
	'#FFFFFF', '#000000', '#123456', '#123456', '#123456']


const countAndRange = (array) => {
	result = {}
	newArr = []
	filteredColors = [];
	array.forEach((color) => {
		if (result[color] === undefined) {
			result[color] = 1
		} else {
			result[color]++
		}
	})
	console.log(result);
	newArr = Object.entries(result)
		.sort((a, b) => b[1] - a[1]);
	console.log('Отсортироывли', newArr);
	newArr.filter((item) => item.splice(1));
	console.log('Удалили', newArr);
	newArr.forEach((item) => {
		filteredColors.push(item[0]);
	})
	console.log('filteredColors', filteredColors);
	return filteredColors;
}
console.log(countAndRange(array));
