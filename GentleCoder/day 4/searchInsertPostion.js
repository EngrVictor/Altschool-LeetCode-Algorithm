/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let left = 0, right = nums.length
    while(left < right) {
        const center = left + Math.floor((right - left) / 2)
        if(nums[center]===target) {
           return center
        } else if(nums[center] > target){
            right = center
        } else {
            left = center + 1
        }
    }
    return left
};

console.log(searchInsert([1, 1, 1, 1, 2, 2, 2, 3, 3], 1));