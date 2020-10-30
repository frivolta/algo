import { getRotations, rotate } from './rotate_array'

const nums = [1,2,3,4,5,6,7]

it('should use the correct k', () => {
  expect(getRotations(nums, 3)).toEqual(3)
  expect(getRotations(nums, 10)).toEqual(3)
})

it('should return the correct array', () => {
  const result = [5, 6, 7, 1, 2, 3, 4]
  const k = 4
  expect(rotate(nums, k)).toEqual(result)
})