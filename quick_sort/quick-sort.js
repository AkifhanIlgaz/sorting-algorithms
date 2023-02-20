function quickSort(nums, low = 0, high = nums.length - 1) {
  if (low < high) {
    [nums, pivot] = partition(nums, low, high);
    quickSort(nums, low, pivot - 1);
    quickSort(nums, pivot + 1, high);
  }
  return nums;
}

/**
 *
 * @param {number[]} nums
 * @param {number} low
 * @param {number} high
 * @returns {number[]}
 */
function partition(nums, low, high) {
  const pivot = nums[high];
  let i = low;

  for (let j = low; j < high; j++) {
    if (nums[j] < pivot) {
      [nums[i], nums[j]] = [nums[j], nums[i]];
      i++;
    }
  }
  [nums[i], nums[high]] = [nums[high], nums[i]];
  return [nums, i];
}
