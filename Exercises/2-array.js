'use strict';

const array = () => {
  const inner = x => inner.list[x];
  inner.list = inner.list || [];
  inner.push = elem => inner.list.push(elem);
  inner.pop = () => inner.list.pop();
  return inner;
};

// const arr = array();
// arr.push('first');
// arr.push('second');
// arr.push('third');
//
// console.log(arr(0)); // Выводит: first
// console.log(arr(1)); // Выводит: second
// console.log(arr(2)); // Выводит: third
//
// console.log(arr.pop()); // Выводит: third
// console.log(arr.pop()); // Выводит: second
// console.log(arr.pop()); // Выводит: first
//
// console.log(arr.pop()); // Выводит: undefined

module.exports = { array };
