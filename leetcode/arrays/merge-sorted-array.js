// 88. Merge Sorted Array

// https://leetcode.com/problems/merge-sorted-array/

// You are given two integer arrays nums1 and nums2, sorted in non - decreasing order,
// and two integers m and n, representing the number of elements in nums1 and nums2 respectively.
// Merge nums1 and nums2 into a single array sorted in non - decreasing order.
// The final sorted array should not be returned by the function, but instead be stored inside the array nums1.
// To accommodate this, nums1 has a length of m + n,
// where the first m elements denote the elements that should be merged,
// and the last n elements are set to 0 and should be ignored.nums2 has a length of n.

// Example 1:

// Input: nums1 = [1, 2, 3, 0, 0, 0], m = 3, nums2 = [2, 5, 6], n = 3
// Output: [1, 2, 2, 3, 5, 6]
// Explanation: The arrays we are merging are[1, 2, 3] and[2, 5, 6].
// The result of the merge is[1, 2, 2, 3, 5, 6] with the underlined elements coming from nums1.
// 	Example 2:

// Input: nums1 = [1], m = 1, nums2 = [], n = 0
// Output: [1]
// Explanation: The arrays we are merging are[1] and[].
// The result of the merge is[1].

// Интуиция
// Замените элемент в массиве 1, где начало индекса в m + n - 1 равно элементу в массиве 2
// Подход
// Сначала нам нужно поместить элемент в массиве 2 в основной массив и сделать длину основного массива равной m + n.
// Затем зациклите массив main для доступа к элементу.
// Свопаем элемент если он больше


function merge(nums1, m, nums2, n) {
	let i = m + n - 1;
	let j = n;
	function _swap(i, j) {
		let temp = nums1[i];
		nums1[i] = nums1[j];
		nums1[j] = temp;
	}
	while (j > 0) {
		nums1[i] = nums2[j - 1];
		i--;
		j--;
	}
	for (let i = 0; i < nums1.length - 1; i++) {
		for (let j = i + 1; j <= nums1.length; j++) {
			if (nums1[i] > nums1[j]) {
				_swap(i, j)
			}
		}
	}
}
merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3)
merge([4, 5, 6, 0, 0, 0], 3, [1, 2, 3], 3)

