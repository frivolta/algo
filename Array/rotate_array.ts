/* Given an array, rotate the array to the right by k steps, where k is non-negative.

Follow up:

Try to come up as many solutions as you can, there are at least 3 different ways to solve this problem.
Could you do it in-place with O(1) extra space? 

Input: nums = [1,2,3,4,5,6,7], k = 3
Output: [5,6,7,1,2,3,4]
Explanation:
rotate 1 steps to the right: [7,1,2,3,4,5,6]
rotate 2 steps to the right: [6,7,1,2,3,4,5]
rotate 3 steps to the right: [5,6,7,1,2,3,4]
*/

// Method 1. ES6 Destructuring. NB: the excercise should return "void", I return the resulted array for the sake of tests
const getRotations = (nums: number[], k: number) => k > nums.length ? k % nums.length : k

function rotate(nums: number[], k: number): number[] {
  const rotations = getRotations(nums, k)
  const rotated = [...nums.slice(rotations), ...nums.slice(0, rotations)]
  return rotated
};


// Method 2. Reverse the array
function rotate_reverse(nums: number[], k: number) {
  k = k % nums.length;
  reverse(nums, 0, nums.length-1)
  reverse(nums, 0, k-1)
  reverse(nums, k, nums.length - 1)
};

function reverse(nums: number[], start: number, end: number){
  while (start < end) {
    const temp = nums[start];
    nums[start] = nums[end];
    nums[end] = temp
    start++;
    end--;
  }
}



// Method 2. Brute force unshifting for k times
function rotate_pop(nums:number[],k:number): void{
  while (k--) {
    nums.unshift(nums.pop() as number);
  }
}




export {rotate, getRotations, reverse, rotate_reverse, rotate_pop}