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


export {rotate, getRotations}