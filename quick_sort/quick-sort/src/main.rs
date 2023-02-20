fn main() {}

fn quick_sort<T: PartialOrd + Copy>(nums: &mut Vec<T>, low: usize, high: usize) {
    if low < high {
        let pivot = partition(nums, low, high);
        quick_sort(nums, low, pivot - 1);
        quick_sort(nums, pivot + 1, high);
    }
}

fn partition<T: PartialOrd + Copy>(nums: &mut Vec<T>, low: usize, high: usize) -> usize {
    let pivot = nums[high];
    let mut i = low;

    for j in low..high {
        if nums[j] < pivot {
            nums.swap(j, i);
            i += 1;
        }
    }
    nums.swap(i, high);
    i
}
