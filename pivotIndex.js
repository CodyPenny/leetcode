/* Given an array of integers nums, write a method that returns the "pivot" index of this array.

We define the pivot index as the index where the sum of all the numbers to the left of the index is equal to the sum of all the numbers to the right of the index.

If no such index exists, we should return -1. If there are multiple pivot indexes, you should return the left-most pivot index.*/

var pivotIndex = function (nums) {
  const sum = nums.reduce((acc, curr) => acc + curr, 0);
  let leftsum = 0;
  for (let i = 0; i < nums.length; i++) {
    if (leftsum === sum - (leftsum + nums[i])) {
      return i;
    }
    leftsum += nums[i];
  }
  return -1;
};

/* Success
Details 
Runtime: 88 ms, faster than 93.65% of JavaScript online submissions for Find Pivot Index.
Memory Usage: 40.8 MB, less than 5.39% of JavaScript online submissions for Find Pivot Index. */