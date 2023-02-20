fn main() {}

fn merge_sort<T: Ord + Copy>(nums: Vec<T>) -> Vec<T> {
    if nums.len() < 2 {
        return nums;
    }
    let middle = nums.len() / 2;
    let (sorted_left_side, sorted_right_side) = (
        merge_sort(nums[..middle].to_vec()),
        merge_sort(nums[middle..].to_vec()),
    );
    return merge(&sorted_left_side, &sorted_right_side);
}

fn merge<T: Ord + Copy>(left_side: &Vec<T>, right_side: &Vec<T>) -> Vec<T> {
    let mut merged: Vec<T> = vec![];
    let (mut i, mut j) = (0, 0);

    while i < left_side.len() && j < right_side.len() {
        let (left_side_element, right_side_element) = (left_side[i], right_side[j]);
        if left_side_element < right_side_element {
            merged.push(left_side_element);
            i += 1;
        } else {
            merged.push(right_side_element);
            j += 1
        }
    }

    while i < left_side.len() {
        merged.push(left_side[i]);
        i += 1
    }

    while j < right_side.len() {
        merged.push(right_side[j]);
        j += 1;
    }

    merged
}
