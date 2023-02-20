export {};

function mergeSort(nums: number[]): number[] {
  if (nums.length < 2) {
    return nums;
  }

  const middle = Math.floor(nums.length / 2);
  const [sortedLeftSide, sortedRightSide] = [
    mergeSort(nums.slice(0, middle)),
    mergeSort(nums.slice(middle)),
  ];

  return merge(sortedLeftSide, sortedRightSide);
}

function merge(leftSide: number[], rightSide: number[]): number[] {
  const final: number[] = [];
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
