def bubble_sort(nums):
    n = len(nums)
    swapping = True

    while swapping:
        swapping = False
        for i in range(1, n):
            if nums[i] < nums[i-1]:
                nums[i], nums[i-1] = nums[i-1], nums[i]
                swapping = True
    
    return nums
