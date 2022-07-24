// DONE 7 https://www.codewars.com/kata/58029cc9af749f80e3001e34/train/javascript


// Given a salary and the array of bills,
// 	calculate your disposable income for a month and return it as
// 		a number of new £5 notes you can get with that amount.
// 		If the money you've got (or do not!) doesn't allow you to get any £5 notes return 0.

function getNewNotes(salary, bills) {
	if (bills.length === 0)
		return Math.floor(salary / 5);
	const monthBillsSum = bills.reduce((first, second) => first + second);
	const result = Math.floor((salary - monthBillsSum) / 5);
	if (result <= 0) {
		return 0
	} else return result
}

console.log(getNewNotes(100, [10, 18, 111])); // 12
