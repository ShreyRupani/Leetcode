/**
 * @param {number[]} nums
 * @return {number}
 */

//My Solution
function maxSubArray(A) {
    var prev = 0;
    var max = -Number.MAX_VALUE;

    for (var i = 0; i < A.length; i++) {
        prev = Math.max(prev + A[i], A[i]);
        max = Math.max(max, prev);
    }
    return max;
}

//Better solution online
var maxSubArray = function(nums) {
  for (let i = 1; i < nums.length; i++) {
    nums[i] = Math.max(nums[i], nums[i] + nums[i - 1]);
  }
  return Math.max(...nums)
};