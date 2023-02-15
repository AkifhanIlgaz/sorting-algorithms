def bubble_sort(nums):
    n = len(nums)
    sorted = False

    while not sorted:
        sorted = True
        for i in range(1, n):
            if nums[i] < nums[i-1]:
                nums[i], nums[i-1] = nums[i-1], nums[i]
                sorted = False
    
    return nums
