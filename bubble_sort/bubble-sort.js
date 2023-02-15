/**
 *
 * @param {number[]} nums
 * @returns {number[]}
 */
function bubbleSort(nums) {
  let swapping = true;

  while (swapping) {
    swapping = false;
    for (let i = 1; i < nums.length; i++) {
      if (nums[i] < nums[i - 1]) {
        let temp = nums[i];
        nums[i] = nums[i - 1];
        nums[i - 1] = temp;
        swapping = true;
      }
    }
  }

  return nums;
}
