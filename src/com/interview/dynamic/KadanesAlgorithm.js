/*
Kadane's Algorithm (Maximum Subarray Sum) - JavaScript
Time Complexity: O(n)
Space Complexity: O(1)
*/

function maxSubarraySum(arr) {
  let maxCurrent = arr[0];
  let maxGlobal = arr[0];

  for (let i = 1; i < arr.length; i++) {
    maxCurrent = Math.max(arr[i], maxCurrent + arr[i]);
    maxGlobal = Math.max(maxGlobal, maxCurrent);
  }

  return maxGlobal;
}

// Example usage
const arr = [-2, -3, 4, -1, -2, 1, 5, -3];
console.log("Maximum Subarray Sum:", maxSubarraySum(arr));
