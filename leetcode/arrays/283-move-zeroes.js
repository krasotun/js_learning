// 283. Move Zeroes

// https://leetcode.com/problems/move-zeroes/description/

// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
// Note that you must do this in -place without making a copy of the array.

// Example 1:
// Input: nums = [0, 1, 0, 3, 12]
// Output: [1, 3, 12, 0, 0]

// Example 2:
// Input: nums = [0]
// Output: [0]

function moveZeroes(nums) {
	let i = 0;
	let j = i + 1;
	while (j <= nums.length - 1) {
		if (nums[i] !== 0) {
			i++;
			j++;
		} else {
			if (nums[j] !== 0) {
				[nums[i], nums[j]] = [nums[j], nums[i]]
				i++;
			}
			j++;
		}
	}
}

function moveZeroesWithNewArray(nums) {
	const nonZeroes = []
	const zeroes = []
	nums.forEach((num) => {
		if (num === 0) {
			zeroes.push(num);
		} else {
			nonZeroes.push(num)
		}
	})
	return [...nonZeroes, ...zeroes];
};

moveZeroes([0, 1, 0, 3, 12]);