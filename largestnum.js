/* Largest Number At Least Twice of Others
In a given integer array nums, there is always exactly one largest element.

Find whether the largest element in the array is at least twice as much as every other number in the array.

If it is, return the index of the largest element, otherwise return -1. */

/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function (nums) {
  let max = nums.reduce((acc, curr) => Math.max(acc, curr));
  let maxIndex = nums.indexOf(max);
  nums.splice(maxIndex, 1);
  if (nums.every((curr) => max >= 2 * curr)) {
    return maxIndex;
  }
  return -1;
};

/* 250 / 250 test cases passed.
Status: Accepted
Runtime: 80 ms
Memory Usage: 38.9 MB */