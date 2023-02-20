package main

func main() {

}

func mergeSort(nums []int) []int {
	if len(nums) < 2 {
		return nums
	}
	middle := len(nums) / 2
	sortedLeftSide, sortedRightSide := mergeSort(nums[:middle]), mergeSort(nums[middle:])
	return merge(sortedLeftSide, sortedRightSide)
}

func merge(leftSide, rightSide []int) []int {
	final := []int{}
	i, j := 0, 0

	for i < len(leftSide) && j < len(rightSide) {
		leftSideElement, rightSideElement := leftSide[i], rightSide[j]
		if leftSideElement < rightSideElement {
			final = append(final, leftSideElement)
			i++
		} else {
			final = append(final, rightSideElement)
			j++
		}
	}

	if i < len(leftSide) {
		final = append(final, leftSide[i:]...)
	}
	if j < len(rightSide) {
		final = append(final, rightSide[j:]...)
	}

	return final
}
