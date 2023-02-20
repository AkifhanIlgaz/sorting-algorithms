package main

func main() {

}

func insertionSort(nums []int) []int {
	for i := range nums {
		j := i
		for j > 0 && nums[j-1] > nums[j] {
			nums[j-1], nums[j] = nums[j], nums[j-1]
			j--
		}
	}

	return nums
}
