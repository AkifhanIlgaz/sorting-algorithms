package main

func main() {
	bubbleSort([]int{})
}

func bubbleSort(nums []int) []int {
	sorted := false

	for !sorted {
		sorted = true
		for i := 1; i < len(nums); i++ {
			if nums[i] < nums[i-1] {
				nums[i-1], nums[i] = nums[i], nums[i-1]
				sorted = false
			}
		}
	}

	return nums
}
