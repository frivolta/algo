import { intersect } from "./intersection_two_arrays";

test("should output [2,2]", () => {
  const nums1 = [1, 2, 2, 1];
  const nums2 = [2, 2];
  expect(intersect(nums1, nums2)).toEqual([2, 2]);
});

test("should output [4,9]", () => {
  const nums1 = [4, 9, 5];
  const nums2 = [9, 4, 9, 8, 4];
  expect(intersect(nums1, nums2)).toEqual([4, 9]);
});
