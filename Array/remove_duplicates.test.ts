import {removeDuplicates, removeDuplicates_reduce, removeDuplicates_filter} from './remove_duplicates'

test('should return lenght 5 for standard input', () => {
  const input = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]
  expect(removeDuplicates(input)).toEqual(5)
  expect(removeDuplicates_reduce(input)).toEqual(5)
  expect(removeDuplicates_filter(input)).toEqual(5)
})

test('should return lenght 0 for empty array', () => {
  const input: number[] = []
  expect(removeDuplicates(input)).toEqual(0)
  expect(removeDuplicates_reduce(input)).toEqual(0)
  expect(removeDuplicates_filter(input)).toEqual(0)
})

test('should return lenght 1 for array of equals elements', () => {
  const input: number[] = [1,1,1,1,1,1,1,1]
  expect(removeDuplicates(input)).toEqual(1)
  expect(removeDuplicates_reduce(input)).toEqual(1)
  expect(removeDuplicates_filter(input)).toEqual(1)
})