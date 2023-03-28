// 414. Third Maximum Number

// https://leetcode.com/problems/third-maximum-number/description/

// Given an integer array nums, return the third distinct maximum
// number in this array.If the third maximum does not exist,
// return the maximum number.

// Example 1:
// Input: nums = [3, 2, 1]
// Output: 1
// Explanation:
// The first distinct maximum is 3.
// The second distinct maximum is 2.
// The third distinct maximum is 1.

// Example 2:
// Input: nums = [1, 2]
// Output: 2
// Explanation:
// The first distinct maximum is 2.
// The second distinct maximum is 1.
// The third distinct maximum does not exist, so the maximum(2) is returned instead.

// Example 3:
// Input: nums = [2, 2, 3, 1]
// Output: 1
// Explanation:
// The first distinct maximum is 3.
// The second distinct maximum is 2(both 2's are counted together since they have the same value).
// The third distinct maximum is 1.

function thirdMax(nums) {

	nums.sort((a, b) => b - a);

	let elemCounted = 1;
	let prevElem = nums[0];

	for (let index = 1; index < nums.length; ++index) {
		if (nums[index] != prevElem) {
			elemCounted += 1;
			prevElem = nums[index];
		}

		if (elemCounted === 3) {
			return nums[index];
		}
	}

	return nums[0];
}