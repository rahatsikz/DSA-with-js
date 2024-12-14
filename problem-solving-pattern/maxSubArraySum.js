// naive solution
/* function maxSubArraySum(arr, num) {
  if (num > arr.length) return null;
  let max = -Infinity;
  for (let i = 0; i < arr.length - num + 1; i++) {
    let temp = 0;
    for (let j = 0; j < num; j++) {
      temp += arr[i + j];
      console.log(arr[i], arr[j], temp);
    }
    if (temp > max) max = temp;
  }
  return max;
} */

//! optimized solution with sliding window
function maxSubArraySum(arr, num) {
  if (num > arr.length) return null;
  let maxSum = 0;
  let tempSum = 0;

  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;

  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }

  return maxSum;
}

console.log(maxSubArraySum([1, 2, 5, 2, 8, 1, 5], 3));
