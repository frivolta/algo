// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

/* export function steps(n: number) {
  for (let i = 0; i < n; i++) {
    let step = "";
    for (let j = 0; j < n; j++) {
      if (j <= i) {
        step += "#";
      } else {
        step += " ";
      }
    }
    console.log(step);
  }
} */

// Recursive
export function steps(n: number, step = "", row = 0): any {
  if (row === n) {
    return;
  }
  if (step.length === n) {
    console.log(step);
    return steps(n, "", row + 1);
  }
  return steps(n, step.length > row ? (step += " ") : (step += "#"), row);
}
