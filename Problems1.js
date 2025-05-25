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
