import { lengthOfLongestSubstring } from "./longest_substring";

describe("Method 1.", () => {
  it("should return correct answer with standard values", () => {
    const input = "pwwkew";
    const output = 3;
    const result = lengthOfLongestSubstring(input);
    expect(result).toBe(output);
  });
  it("should return correct answer with standard values", () => {
    const input = "abcabcbb";
    const output = 3;
    const result = lengthOfLongestSubstring(input);
    expect(result).toBe(output);
  });
  it("should return correct answer with uniques values", () => {
    const input = "bbbbb";
    const output = 1;
    const result = lengthOfLongestSubstring(input);
    expect(result).toBe(output);
  });
  it("should return correct answer with empty input", () => {
    const input = "";
    const output = 0;
    const result = lengthOfLongestSubstring(input);
    expect(result).toBe(output);
  });
  it("should return correct answer with two lenght input", () => {
    const input = "au";
    const output = 2;
    const result = lengthOfLongestSubstring(input);
    expect(result).toBe(output);
  });
  it("should return correct answer with three lenght input", () => {
    const input = "aab";
    const output = 2;
    const result = lengthOfLongestSubstring(input);
    expect(result).toBe(output);
  });
  it("should return correct answer with three lenght input", () => {
    const input = "dvdf";
    const output = 3;
    const result = lengthOfLongestSubstring(input);
    expect(result).toBe(output);
  });
});
