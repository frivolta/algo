//An hourglass in  is a subset of values with indices falling in this pattern in 's graphical representation:

const testInput = [
  [1, 2, 3, 4, 5, 6],
  [1, 2, 3, 4, 5, 6],
  [1, 2, 3, 4, 5, 6],
  [1, 2, 3, 4, 5, 6],
  [1, 2, 3, 4, 5, 6],
  [1, 2, 3, 4, 5, 6],
];

// Standard
function hourglassSum(arr: number[][]): number {
  let maxSum = -63;
  for (let row = 1; row < arr.length - 1; row++) {
    for (let cell = 1; cell < arr.length - 1; cell++) {
      const tempSum =
        arr[row - 1][cell - 1] +
        arr[row - 1][cell] +
        arr[row - 1][cell + 1] +
        arr[row][cell] +
        arr[row + 1][cell - 1] +
        arr[row + 1][cell] +
        arr[row + 1][cell + 1];
      maxSum = tempSum > maxSum ? tempSum : maxSum;
    }
  }
  return maxSum;
}

console.log(hourglassSum(testInput));
