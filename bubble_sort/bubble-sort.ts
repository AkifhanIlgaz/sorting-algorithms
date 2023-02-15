export {};

function bubbleSort(nums: number[]): number[] {
  let sorted = false;

  while (!sorted) {
    sorted = true;
    for (let i = 1; i < nums.length; i++) {
      if (nums[i] < nums[i - 1]) {
        [nums[i - 1], nums[i]] = [nums[i], nums[i - 1]];
        sorted = false;
      }
    }
  }

  return nums;
}
