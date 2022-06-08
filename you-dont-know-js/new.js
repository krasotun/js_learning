function returnNameAndAge(a, b) {
	/* return  */
	/* for (let i = 0; i < 3; i++) {

	} */
	let newString = '';
	for (let i = 0; i < 3; i++) {
		newString += `Привет ${a} тебе ${b} лет\n`;
	}
	return newString

}

console.log(returnNameAndAge('Вася', 25));