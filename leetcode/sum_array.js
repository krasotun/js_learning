// Given an array nums.We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

// Return the running sum of nums.

const array = [1, 5, 8, 6];
const newArray = [];
const runningSum = function (nums) {
	for (let i = 0; i < nums.length - 1; i++) {
		let sum = nums[i] + nums[i + 1];
		newArray.push(sum);
	}
	return newArray.reduce((first, next) => first + next);
};


console.log(runningSum(array));


