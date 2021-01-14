/* Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
Follow up: Could you implement a solution with a linear runtime complexity and without using extra memory? 
Input: nums = [2,2,1]
Output: 1
*/

// Method 1.
function singleNumber(nums: number[]): number {
  if (nums.length === 1) {
    return nums[0]
  }

  for (let i = 0; i < nums.length; i++) {
    let temp = nums[1]
    nums.splice(i, 1)
    if (nums.indexOf(temp) === -1) {
      return temp
    }
  }

  return nums[0]
};


// Method 2. ES6
function singleNumber_es6(nums: number[]): number{
  const singleNumber = nums.filter((num, i) => nums.indexOf(num, i+1) === -1 && nums.indexOf(num) === i)
  return singleNumber[0]
}

export {singleNumber, singleNumber_es6}