// 1089. Duplicate Zeros

// https://leetcode.com/problems/duplicate-zeros/solutions/

// Given a fixed - length integer array arr,
// duplicate each occurrence of zero, shifting the remaining elements to the right.
// Note that elements beyond the length of the original array are not written.
// Do the above modifications to the input array in place and do not return anything.

// Example 1:

// Input: arr = [1, 0, 2, 3, 0, 4, 5, 0]
// Output: [1, 0, 0, 2, 3, 0, 0, 4]
// Explanation: After calling your function, the input array is modified to: [1, 0, 0, 2, 3, 0, 0, 4]

// Example 2:

// Input: arr = [1, 2, 3]
// Output: [1, 2, 3]
// Explanation: After calling your function, the input array is modified to: [1, 2, 3]

function duplicateZeros(arr) {
	if (arr.indexOf(0) === -1) {
		return arr;
	}

	const length = arr.length;
	const newArr = [];
	arr.forEach((num) => {
		if (num === 0) {
			newArr.push(num)
			newArr.push(num)
		} else { newArr.push(num) }
	})
	arr = [...newArr.slice(0, length)];
	return arr;
}


// console.log(duplicateZeros([1, 2, 3]));
console.log(duplicateZeros([1, 0, 2, 3, 0, 4, 5, 0]));

// Решение от лит кода

const duplicateZeros = function (arr) {
	var integ = arr.length;
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] === 0) {
			arr.splice(i, 0, 0);
			i++;
		}

	}
	arr.splice(integ, arr.length);
	return arr;
};