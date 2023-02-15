fn main() {
    println!("Hello, world!");
}

fn bubble_sort<T: Ord>(nums: &mut [T]) {
    let mut sorted = false;

    while !sorted {
        sorted = true;
        for i in 1..nums.len() {
            if nums[i] < nums[i - 1] {
                nums.swap(i, i - 1);
                sorted = false;
            }
        }
    }
}
