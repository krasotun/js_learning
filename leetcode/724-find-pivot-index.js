724. Find Pivot Index

https://leetcode.com/problems/find-pivot-index/?envType=study-plan&id=level-1

// Given an array of integers nums, calculate the pivot index of this array.
// The pivot index is the index where the sum of all the numbers strictly to the left of the index is equal to the sum of all the numbers strictly to the index's right.
// If the index is on the left edge of the array, then the left sum is 0 because there are no elements to the left.This also applies to the right edge of the array.
// Return the leftmost pivot index.If no such index exists, return -1.

// We need to quickly compute the sum of values to the left and the right of every index.
// Let's say we knew S as the sum of the numbers, and we are at index i.
// If we knew the sum of numbers leftsum that are to the left of index i,
// then the other sum to the right of the index would just be S - nums[i] - leftsum.
// As such, we only need to know about leftsum to check whether an index is a pivot index 
// n constant time.Let's do that: as we iterate through candidate indexes i, we will maintain the correct value of leftsum.

// Example
// Input: nums = [1, 7, 3, 6, 5, 6]
// Output: 3
// Explanation:
// The pivot index is 3.
// Left sum = nums[0] + nums[1] + nums[2] = 1 + 7 + 3 = 11
// Right sum = nums[4] + nums[5] = 5 + 6 = 11

function pivotIndex(nums) {

};