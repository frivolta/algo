// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

export function pyramid(
  n: number,
  row = 0,
  message = "",
  slowPointer = 0
): any {
  if (n === row) {
    return;
  }
  if (slowPointer === n) {
    console.log(message);
    return pyramid(n, row + 1, "", 0);
  }

  if (slowPointer === 0) {
    return pyramid(n, row, "#", slowPointer + 1);
  }

  return pyramid(
    n,
    row,
    slowPointer <= row ? `#${message}#` : ` ${message} `,
    slowPointer + 1
  );
}
