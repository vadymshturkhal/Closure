'use strict';

const seq = fn => {
  // Solution is too long...
  this.funcs = this.funcs || [];
  if (typeof fn === 'number') {
    for (const func of this.funcs.reverse()) fn = func(fn);
    return fn;
  }
  this.funcs.push(fn);
  return seq;
};

// const result = seq(x => x * 2)(x => x + 7)(5); // 24
// console.log(result);
module.exports = { seq };
