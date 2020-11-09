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

function twoNumberSum(array, targetSum) {
  // Write your code here.
	let set = new Set();
	let result = [];
	
	for (const number of array) {
		let otherNumber = targetSum - number;
		if(set.has(otherNumber)){
			result.push(otherNumber, number);
			set.delete(otherNumber);
		} else {
			set.add(number);
		}
	}
	return result;
}

/*
A function that takes in a non-empty array of distinct integers and an integer representing a target sum.

passes tests
*/

function isValidSubsequence(array, sequence) {
  // Write your code here.
  if(sequence.length > array.length) return false
	let arr = [];
	let index;
	for(let i = 0; i < sequence.length; i++) {
		index = array.indexOf(sequence[i])
		if(index === -1) return false 
		arr.push(index);
		array.splice(index, 1);
  };

	if(arr.length){
    for (let i = 0; i < arr.length - 1; i++){
      if(arr[i] > arr[i+1]) {
        return false
      }
    }
    return true;
	}
	return false
}
}

let testarray = [5, 1, 22, 25, 6, -1, 8, 10];
let seq = [1, 6, -1, 10];
isValidSubsequence(testarray, seq)
// 23 / 23 test cases passed.

function isValidSubsequenceTwo(array, sequence) {
  let sequenceIndex = 0;
  for (const value of array){
    if(sequenceIndex === sequenceIndex.length) break;
    if(sequence[sequenceIndex] === value) sequenceIndex++;
  }
  return sequenceIndex === sequence.length;
}

function isValidSubsequenceThree(array, sequence) {
  let sequenceIndex = 0;
  let arrayIndex = 0;
  while(arrayIndex < array.length && sequenceIndex < sequence.length){
    if(sequence[sequenceIndex] === array[arrayIndex]) sequenceIndex++;
    arrayIndex++;
  }
  return sequenceIndex === sequence.length;
}