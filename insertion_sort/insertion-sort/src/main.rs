fn main() {}

fn insertion_sort<T: Ord>(nums: &mut Vec<T>) {
    for i in 0..nums.len() {
        let mut j = i;
        while j > 0 && nums[j - 1] > nums[j] {
            nums.swap(j - 1, j);
            j -= 1;
        }
    }
}
