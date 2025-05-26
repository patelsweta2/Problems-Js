// big front end questions in js
// Q.no - 155 -> Please create a function count(), when called it should return how many times it has been called, count.reset() should also implemented.

function counter() {
  let count = 0;
  function inner() {
    count++;
    return count;
  }
  inner.reset = function () {
    count = 0;
  };
  return inner;
}

const count1 = counter();
console.log(count1);
console.log(count1);
count1.reset();
console.log(count1);
console.log(count1);

// Currying function
//1. Without currying
function curryAdd(a, b) {
  return a + b;
}
console.log(curryAdd(2, 3)); // 5

//2. With Currying
function Add(a) {
  return function (b) {
    return a + b;
  };
}
console.log(Add(2)(3));

// real-world use cases in currying
function greet(greeting) {
  return function (name) {
    return `${greeting}, ${name}`;
  };
}

const sayHello = greet("Hello");
console.log(sayHello("Sweta"));
console.log(sayHello("Kapil"));

const sayHi = greet("Hi");
console.log(sayHi("Sweta"));

// iss function me mai ye smjhi hu ki currying fun ka use krke mai
// resuable fun bna skti hu.

// some more example in currying
function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    } else {
      return function (...next) {
        return curried.apply(this, args.concat(next));
      };
    }
  };
}

function sum(a, b, c) {
  return a + b + c;
}
const curriedSum = curry(sum);

console.log(curriedSum(1)(2)(3));
console.log(curriedSum(1)(2)(3));
console.log(curriedSum(1)(2)(3));

// split array into chunks
function chunk(array, size) {
  let result = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
}

console.log(chunk([1, 2, 3, 4, 5, 6, 7], 2));

// without slice
function chunks(array, size) {
  let result = [];
  for (let i = 0; i < array.length; i += size) {
    let newArr = [];
    if (i + size <= array.length) {
      for (let j = i; j < i + size; j++) {
        newArr.push(array[j]);
      }
    } else {
      newArr.push(array[i]);
    }

    result.push(newArr);
  }
  return result;
}

console.log(chunks([1, 2, 3, 4, 5, 6, 7, 8, 9], 2));

//
