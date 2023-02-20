export {};

function quickSort(
  nums: Array<number>,
  low: number = 0,
  high: number = nums.length - 1
): number[] {
  if (low < high) {
    const pivot = nums[high];
    let i = low;

    for (let j = low; j < high; j++) {
      if (nums[j] < pivot) {
        [nums[i], nums[j]] = [nums[j], nums[i]];
        i++;
      }
    }

    [nums[i], nums[high]] = [nums[high], nums[i]];
    quickSort(nums, low, i - 1);
    quickSort(nums, low + 1, high);
  }
  return nums;
}
