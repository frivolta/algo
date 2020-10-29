"use strict";
/*
Given a sorted array nums, remove the duplicates in-place such that each element appears only once and returns the new length.
Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.
*/
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
/*
Input: nums = [0,0,1,1,1,2,2,3,3,4]
Output: 5, nums = [0,1,2,3,4]
Explanation: Your function should return length = 5, with the first five elements of nums being modified to 0, 1, 2, 3, and 4 respectively. It doesn't matter what values are set beyond the returned length.
*/
var newNumbers = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
// Method 1. Using slow pointer
function removeDuplicates(nums) {
    if (nums.length === 0) {
        return 0;
    }
    var pointer1 = 0;
    for (var pointer2 = 1; pointer2 < nums.length; pointer2++) {
        if (nums[pointer1] !== nums[pointer2]) {
            pointer1++;
            nums[pointer1] = nums[pointer2];
        }
    }
    return pointer1 + 1;
}
// Method 2. ES6 Using filter
function removeDuplicates_filter(nums) {
    nums = nums.filter(function (item, index) { return nums.indexOf(item) === index; });
    return nums.length;
}
// Method 3. Using ES6 Reducers
function removeDuplicates_reduce(nums) {
    nums = nums.reduce(function (acc, item) { return acc.includes(item) ? acc : __spreadArrays(acc, [item]); }, []);
    return nums.length;
}
console.log(removeDuplicates(newNumbers));
console.log(removeDuplicates_filter(newNumbers));
console.log(removeDuplicates_reduce(newNumbers));
