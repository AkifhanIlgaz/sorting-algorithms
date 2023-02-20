package main

func main() {

}

func quickSort(nums []int, low, high int) []int {
	if low < high {
		nums, pivot := partition(nums, low, high)
		quickSort(nums, low, pivot-1)
		quickSort(nums, pivot+1, high)
	}
	return nums
}

func partition(nums []int, low, high int) ([]int, int) {
	pivot := nums[high]
	i := low

	for j := low; j < high; j++ {
		if nums[j] < pivot {
			nums[i], nums[j] = nums[j], nums[i]
			i++
		}
	}

	nums[high], nums[i] = nums[i], nums[high]
	return nums, i
}
