/**
 *
 * @param {number[]} nums
 * @returns {number[]}
 */
function mergeSort(nums) {
  if (nums.length < 2) {
    return nums;
  }
  const middle = Math.floor(nums.length / 2);
  const sortedLeftSide = mergeSort(nums.slice(0, middle));
  const sortedRightSide = mergeSort(nums.slice(middle));

  return merge(sortedLeftSide, sortedRightSide);
}

/**
 *
 * @param {number[]} leftSide
 * @param {number[]} rightSide
 * @returns {number[]}
 */
function merge(leftSide, rightSide) {
  let final = [];
  let [i, j] = [0, 0];

  while (i < leftSide.length && j < rightSide.length) {
    const [leftSideElement, rightSideElement] = [leftSide[i], rightSide[j]];
    if (leftSideElement < rightSideElement) {
      final.push(leftSideElement);
      i++;
    } else {
      final.push(rightSideElement);
      j++;
    }
  }

  while (i < leftSide.length) {
    final.push(leftSide[i]);
    i++;
  }
  while (j < rightSide.length) {
    final.push(rightSide[j]);
    j++;
  }

  return final;
}
