/* Given two arrays, write a function to compute their intersection.

Example 1:

Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2,2]
Example 2:

Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [4,9]
Note:

Each element in the result should appear as many times as it shows in both arrays.
The result can be in any order.
*/

// Method 1: Array is intersected and occurrencies are computated

//Slow: Runtime: 136 ms
//Memory Usage: 45.2 MB
function intersect(nums1: number[], nums2: number[]): number[] {
  // Array intersection
  const bareIntersectedArray = [...nums1, ...nums2];
  const reducedArray = bareIntersectedArray.reduce<number[]>(
    (acc, currentNumber) => {
      // Calculate occurrencies already in the acc
      const previousOccurrencies = acc.filter((item) => item === currentNumber)
        .length;
      // Calculate occurrencies in nums1, nums2
      const nums1Occurencies = nums1.filter((item) => item === currentNumber)
        .length;
      const nums2Occurencies = nums2.filter((item) => item === currentNumber)
        .length;
      // If previous occurrencies are less than both nums1 and nums2 occurrencies the concatenate
      if (
        previousOccurrencies + 1 <= nums1Occurencies &&
        previousOccurrencies + 1 <= nums2Occurencies
      ) {
        return [...acc, currentNumber];
      }
      return acc;
    },
    []
  );
  return reducedArray;
}
export { intersect };
