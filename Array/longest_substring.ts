/* Given a string s, find the length of the longest substring without repeating characters.

Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
Example 4:

Input: s = ""
Output: 0 */

//Method 1. Runtime: 108 ms <3

function lengthOfLongestSubstring(s: string): number {
  let a_pointer = 0;
  let b_pointer = 0;
  let max = 0;

  let charSet = new Set();

  while (b_pointer < s.length) {
    if (!charSet.has(s.charAt(b_pointer))) {
      charSet.add(s.charAt(b_pointer));
      b_pointer++;
      max = Math.max(charSet.size, max);
    } else {
      charSet.delete(s.charAt(a_pointer));
      a_pointer++;
    }
  }

  return max;
}

export { lengthOfLongestSubstring };
