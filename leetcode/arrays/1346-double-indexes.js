// 1346. Check If N and Its Double Exist

// https://leetcode.com/problems/check-if-n-and-its-double-exist/description/

// Given an array arr of integers, check if there exist two indices i and j such that:
// i != j
// 0 <= i, j < arr.length
// arr[i] == 2 * arr[j]
// Example 1:
// Input: arr = [10, 2, 5, 3]
// Output: true
// Explanation: For i = 0 and j = 2, arr[i] == 10 == 2 * 5 == 2 * arr[j]
// Example 2:
// Input: arr = [3, 1, 7, 11]
// Output: false
// Explanation: There is no i and j that satisfy the conditions.
function checkItExists(arr) {
	const hash = {}
	for (let i = 0; i < arr.length; i++) {
		const current = arr[i];
		if (hash[current] !== undefined) {
			return true;
		}
		hash[current / 2] = current;
		hash[current * 2] = current;
		console.log(hash);
	}
	return false;
}

console.log(checkItExists([10, 2, 5, 3]));