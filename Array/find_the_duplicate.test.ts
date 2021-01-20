import { findDuplicate } from "./find_the_duplicate";

test("should output 2", () => {
  const nums = [1, 3, 4, 2, 2];
  expect(findDuplicate(nums)).toEqual(2);
});

test("should output 3", () => {
  const nums = [3, 1, 3, 4, 2];
  expect(findDuplicate(nums)).toEqual(3);
});
