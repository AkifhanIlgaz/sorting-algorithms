/**
 *
 * @param {number[]} nums
 * @returns {number[]}
 */
function insertionSort(nums) {
  for (let i = 0; i < nums.length; i++) {
    let j = i;
    while (j > 0 && nums[j - 1] > nums[j]) {
      [nums[j - 1], nums[j]] = [nums[j], nums[j - 1]];
      j--;
    }
  }
  return nums;
}
