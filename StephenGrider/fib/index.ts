// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

/* export function fib(n: number): number {
  const series: number[] = [];
  for (let i = 0; i < n + 1; i++) {
    if (series.length < 2) {
      series.push(!series.length ? 0 : 1);
    } else {
      series.push(series[i - 2] + series[i - 1]);
    }
  }
  return series[n];
}
 */
/* export function fib(n: number): number {
  return new Array(n + 1).fill(null).reduce<number[]>(
    (acc, _, i) => {
      return i < 2 ? acc : [...acc, acc[i - 2] + acc[i - 1]];
    },
    [0, 1]
  )[n];
} */

/* export function fib(n: number, series: number[] = [0, 1], count = 2): number {
  if (series.length > n) {
    return series[n];
  }
  return fib(n, [...series, series[count - 2] + series[count - 1]], ++count);
}
 */

export function fib(n: number): number {
  if (n < 2) {
    return n;
  }
  return fib(n - 1) + fib(n - 2);
}
