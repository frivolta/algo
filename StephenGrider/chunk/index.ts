// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

/* export function chunk(array: number[], size: number) {
  const times = Math.floor(array.length / size);
  const rest = array.length % size;

  const chunked: number[][] = [];
  for (let i = 1; i < times + 1; i++) {
    chunked.push(array.slice(i * size - size, i * size));
  }
  if (rest > 0) {
    chunked.push(array.slice(times * size, array.length));
  }
  return chunked;
} */

export function chunk(array: number[], size: number) {
  const times = Math.floor(array.length / size);
  const hasRest = array.length % size > 0;
  const chunked = new Array(times).fill(null).map((_, i) => {
    return array.slice((i + 1) * size - size, (i + 1) * size);
  });

  return hasRest
    ? [...chunked, array.slice(times * size, array.length)]
    : chunked;
}
