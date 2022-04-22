const newObj = {
	x: 10,
	y: 15,
	z: 20
};

function objToConsole(obj) {
	let output = '{';
	for (key in obj) {
		output = output + `${key}:${obj[key]},`;
	}
	output = output.slice(0, -1);
	output += '}'

	return output;
}
console.log(objToConsole(newObj));

