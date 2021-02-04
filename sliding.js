/* Given an array, find the average of all contiguous subarrays of size ‘K’ in it.
Array: [1, 3, 2, 6, -1, 4, 1, 8, 2], K=5
Output: [2.2, 2.8, 2.4, 3.6, 2.8]
*/

function bruteforce_subarray (arr, k) {
  const result = [];
  for (i = 0; i < arr.length - k + 1; i++){
    let sum = 0.0
    for (j = i; j < k + i; j++){
      sum += arr[j]
    }
    result.push(sum/k)
  }
  return result;
}

function optimal_subarray (arr, k) {
  const result = []
  let sum = 0.0;
  let j = 0
  for ( i = 0; i < arr.length; i++ ) {
    sum += arr[i];
    if (i >= k - 1) {
      result.push(sum/k)
      sum -= arr[j];
      j++;
    }
  }
  return result
}

/*
Given an array of positive numbers and a positive number ‘k,’ find the maximum sum of any contiguous subarray of size ‘k’.
*/

function max_sum (arr, k) {
  let max = 0;
  let sum = 0;
  let j = 0;
  for (let i = 0; i < arr.length; i++){
    sum += arr[i];
    if(i >= k - 1){
      max = Math.max(sum, max);
      sum -= arr[j];
      j++;
    }
  }
  return max
}

//time complexity of the above algorithm will be O(N) and constant space O(1)

