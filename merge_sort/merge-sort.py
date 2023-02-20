def merge_sort(nums):
    if len(nums) < 2:
        return nums
    middle = len(nums) // 2
    sorted_left_side, sorted_right_side = merge_sort(nums[middle:]),  merge_sort(nums[:middle])
    return merge(sorted_left_side, sorted_right_side)


def merge(first, second):
    sorted_nums = []
    i,j = 0,0

    while i < len(first) and j < len(second):
        element_of_first, element_of_second = first[i], second[j]
        if element_of_first < element_of_second:
            sorted_nums.append(element_of_first)
            i += 1
        else:
            sorted_nums.append(element_of_second)
            j += 1 

    if i < len(first):
        sorted_nums.extend(first[i:])
    elif j < len(second):
        sorted_nums.extend(second[j:])

    return sorted_nums

print(merge_sort([0,3,2,6,3,4]))