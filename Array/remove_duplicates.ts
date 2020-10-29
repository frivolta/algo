/*
Given a sorted array nums, remove the duplicates in-place such that each element appears only once and returns the new length.
Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory. 
*/

/*
Input: nums = [0,0,1,1,1,2,2,3,3,4]
Output: 5, nums = [0,1,2,3,4]
Explanation: Your function should return length = 5, with the first five elements of nums being modified to 0, 1, 2, 3, and 4 respectively. It doesn't matter what values are set beyond the returned length.
*/

// Method 1. Using slow pointer
function removeDuplicates(nums: number[]): number{
    if (nums.length === 0) {
      return 0
    }
    
    let pointer1 = 0;
    for (let pointer2 = 1; pointer2 < nums.length; pointer2++){
        if(nums[pointer1] !== nums[pointer2])
        {
            pointer1++
            nums[pointer1] = nums[pointer2]
        }
    }
    return pointer1+1
}

// Method 2. ES6 Using filter
function removeDuplicates_filter(nums: number[]): number {
    nums = nums.filter((item, index) => nums.indexOf(item) === index)
    return nums.length
}

// Method 3. Using ES6 Reducers
function removeDuplicates_reduce(nums: number[]):number {
    nums = nums.reduce<number[]>((acc: number[], item: number) => acc.includes(item) ? acc : [...acc, item], [])
    return nums.length
}

export {removeDuplicates, removeDuplicates_reduce, removeDuplicates_filter}