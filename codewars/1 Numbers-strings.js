// 6 kyu  https://www.codewars.com/kata/5208f99aee097e6552000148/javascript

// Complete the solution so that the function will break up camel casing, using a space between words.

// 	Example
// "camelCasing"  => "camel Casing"
// "identifier"   => "identifier"
// ""             => ""

const splitCamelCase = (string) => {
	const indexArray = [0];
	for (let i = 0; i < string.length; i++) {
		if (string[i] === string[i].toUpperCase()) {
			indexArray.push(i);
		}
	}
	indexArray.push(string.length);
	const wordsArray = [];
	for (let i = 0; i < indexArray.length - 1; i++) {
		const slicedWord = string.slice(indexArray[i], indexArray[i + 1]); // Намеренно выходим за границу массива
		wordsArray.push(slicedWord);
	}
	console.log(wordsArray.length);
	return wordsArray.join(' ');
}
console.log(splitCamelCase('megaSuperVeryVeryWebDevelopment'));
console.log(splitCamelCase('mega'));


const splitWithoutArray = (stringInp) => {
	for (let i = 0; i < stringInp.length; i++) {
		if (stringInp[i] === stringInp[i].toUpperCase()) {
			const slicedWord = stringInp.slice(i);
			console.log(slicedWord);
		}
	}
}

console.log(splitWithoutArray('megaSuperVeryVeryWebDevelopment'));


// DONE 7 kyu https: //www.codewars.com/kata/get-the-middle-character
/* You are going to be given a word.Your job is to
return the middle character of the word.If the word 's length is odd, return the middle character. If the word'
s length is even,
return the middle 2 characters.
	
# Examples:
Kata.getMiddle("test") should
return "es"
Kata.getMiddle("testing") should
return "t"
Kata.getMiddle("middle") should
return "dd"
Kata.getMiddle("A") should
return "A" */

function getMiddle(s) {
	if (s.length % 2 == 0) { // если четное
		let i = (s.length * 0.5 - 1); // получаем сколько символов отбрасывать
		return s.slice(i, s.length - i); // отбрасываем от начала и конца
	} else {
		let i = (s.length * 0.5 - 0.5);
		return s.slice(i, s.length - i);

	}
}


//DONE  7 kyu https: //www.codewars.com/kata/absent-vowel
/* Your job is to figure out the index of which vowel is missing from a given string:
	
		A has an index of 0,
		E has an index of 1,
		I has an index of 2,
		O has an index of 3,
		U has an index of 4.
Examples
		"John Doe hs seven red pples under his bsket" => 0;
missing: "a"
"Bb Smith sent us six neatly arranged range bicycles" => 3;
missing: "o"
	
*/
console.log(key);
console.log(obj[key]);

function absentVowel(x) {
	if (x.indexOf('a') == -1) {
		return 0;
	}
	if (x.indexOf('e') == -1) {
		return 1;
	}
	if (x.indexOf('i') == -1) {
		return 2;
	}
	if (x.indexOf('o') == -1) {
		return 3;
	}
	if (x.indexOf('u') == -1) {
		return 4;
	}
}

let test = absentVowel('Bb Smith sent us six neatly arranged range bicycles');
console.log((test));

/*  DONE   7 kyu https://www.codewars.com/kata/554b4ac871d6813a03000035
In this little assignment you are given a string of space separated numbers, and have to
return the highest and lowest number.
	
Example:
	
highAndLow("1 2 3 4 5"); // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"
Notes:
	
All numbers are valid Int32, no need to validate them.
There will always be at least one number in the input string.
Output string must be two numbers separated by a single space, and highest number is first.
	
*/

function highAndLow(numbers) {
	let arrayNumbers = numbers.split(' '); // строку в массив
	let max = Math.max.apply(null, arrayNumbers); // ищем макс
	let min = Math.min.apply(null, arrayNumbers); // ишем мин
	let result = `${max} ${min}`; // формируем результат
	return result;

}

highAndLow("1 9 3 4 -5");
test

/*
	
	7 kyu https: //www.codewars.com/kata/jaden-casing-strings
	The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.
	
Example:
	
		Not Jaden - Cased: "How can mirrors be real if our eyes aren't real"
Jaden - Cased: "How Can Mirrors Be Real If Our Eyes Aren't Real"
	
*/
String.prototype.toJadenCase = function () {
	//...
};





/* 7 kyu https: //www.codewars.com/kata/disemvowel-trolls
 7 kyu https: //www.codewars.com/kata/isograms
 7 kyu https: //www.codewars.com/kata/nickname-generator
 7 kyu https: //www.codewars.com/kata/digits-explosion



 6 kyu https: //www.codewars.com/kata/handshake-problem
 6 kyu https: //www.codewars.com/kata/reverse-or-rotate
 6 kyu https: //www.codewars.com/kata/multiples-of-3-or-5
 */