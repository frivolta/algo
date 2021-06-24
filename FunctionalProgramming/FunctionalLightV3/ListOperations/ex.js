"use strict";

//const one = () => Math.floor(Math.random() * 100);
//const two = () => Math.floor(Math.random() * 100);
const single = (val) => () => val;

const add = (n1, n2) =>
  [n1, n2].reduce((acc, val) => {
    return acc + val;
  }, 0);

const add2 = (fn1, fn2) => add(fn1(), fn2());
