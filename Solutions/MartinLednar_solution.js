//Write a function identity that takes an argument and returns that argument
const identity = (x) => x;

//Write a binary function addb that takes two numbers and returns their sum
const addb = (a, b) => a + b;

//Write a binary function subb that takes two numbers and returns their difference
const subb = (a, b) => a - b;

//Write a binary function mulb that takes two numbers and returns their product
const mulb = (a, b) => a * b;

//Write a binary function minb that takes two numbers and returns the smaller one
const minb = (a, b) => (a < b ? a : b);

//Write a binary function maxb that takes two numbers and returns the larger one
const maxb = (a, b) => (a > b ? a : b);

//Write a function add that is generalized for any amount of arguments
const add = (...args) => args.reduce((a, b) => a + b);

//Write a function sub that is generalized for any amount of arguments
const sub = (...args) => args.reduce((a, b) => a - b);

//Write a function mul that is generalized for any amount of arguments
const mul = (...args) => args.reduce((a, b) => a * b);

//Write a function min that is generalized for any amount of arguments
const min = (...args) => args.reduce((a, b) => Math.min(a, b));

//Write a function max that is generalized for any amount of arguments
const max = (...args) => args.reduce((a, b) => Math.max(a, b));

//Write a function addRecurse that is the generalized add function but uses recursion
function addRecurse(...args) {
  let x = args.flat();

  if (x.length === 1) {
    return x[0];
  } else {
    return x.pop() + addRecurse(x);
  }
}

//Write a function mulRecurse that is the generalized mul function but uses recursion
function mulRecurse(...args) {
  let x = args.flat();

  if (x.length === 1) {
    return x[0];
  } else {
    return x.pop() * mulRecurse(x);
  }
}

//Write a function minRecurse that is the generalized min function but uses recursion
function minRecurse(...args) {
  let x = args.flat();

  if (x.length !== 1) {
    if (x[0] < x[1]) {
      x.splice(1, 1);
    } else {
      x.shift();
    }

    return minRecurse(x);
  } else {
    return x[0];
  }
}

//Write a function maxRecurse that is the generalized max function but uses recursion
function maxRecurse(...args) {
  let x = args.flat();

  if (x.length !== 1) {
    if (x[0] > x[1]) {
      x.splice(1, 1);
    } else {
      x.shift();
    }

    return maxRecurse(x);
  } else {
    return x[0];
  }
}

//Write a function not that takes a function and returns the negation of its result
const not = (func) => (x) => func(x) ? false : true;

//Write a function acc that takes a function and an initial value and returns a function that runs the initial function on each argument, accumulating the result
const acc =
  (func, initValue) =>
  (...nums) =>
    nums.reduce(func, initValue);

//Write a function accPartial that takes in a function, a start index, and an end index, and returns a function that accumulates a subset of its arguments by applying the given function to all elements between start and end.
const accPartial = (func, start, end) => {
  return (...nums) => {
    let x = nums.splice(start, end - start);
    nums.splice(1, 0, func(...x));
    return nums;
  };
};

//Write a function accRecurse that does what acc does but uses recursion
function accRecurse(fn, init) {
  return (...num) => {
    let numm = num.flat();
    if (numm.length === 1) {
      return fn(init, numm[0]);
    } else {
      return accRecurse(fn, fn(init, numm.shift()))(numm);
    }
  };
}

//Write a function fill that takes a number and returns an array with that many numbers equal to the given number
const fill = (num) => {
  const arr = [];

  for (let i = num; i > 0; i--) {
    arr.push(num);
  }

  return arr;
};

//Write a function fillRecurse that does what fill does but uses recursion
function fillRecurse(num, array = []) {
  if (array.length === num) {
    return array;
  } else {
    array.push(num);
    return fillRecurse(num, array);
  }
}

//Write a function set that is given a list of arguments and returns an array with all duplicates removed
const set = (...args) => {
  let arr = [];

  args.forEach((arg) => {
    if (arr.includes(arg)) {
      return;
    } else {
      arr.push(arg);
    }
  });

  return arr;
};

//Write a function identityf that takes an argument and returns a function that returns that argument
const identityf = (x) => () => x;

//Write a function addf that adds from two invocations
const addf = (a) => (b) => a + b;

//Write a function liftf that takes a binary function, and makes it callable with two invocations
const liftf = (func) => (a) => (b) => func(a, b);

//Write a pure function pure that is a wrapper arround the impure function impure
function pure(x, y) {
  function impure(x) {
    y++;
    z = y * x;
  }

  let z;
  impure(x);
  return [y, z];
}

//Write a function curryb that takes a binary function and an argument, and returns a function that can take a second argument
const curryb = (func, arg1) => (arg2) => func(arg1, arg2);

//Write a function curry that is generalized for any amount of arguments
const curry =
  (func, ...args1) =>
  (...args2) =>
    func(...args1, ...args2);

//Without writting any new functions, show multiple ways to create the inc function
// const inc = (x) => identity(x);

module.exports = {
  pure,
  addf,
  liftf,
  identityf,
  set,
  fillRecurse,
  fill,
  identity,
  addb,
  add,
  sub,
  subb,
  acc,
  accRecurse,
  accPartial,
  not,
  maxRecurse,
  minRecurse,
  mul,
  mulRecurse,
  min,
  max,
  minRecurse,
  maxRecurse,
  mulb,
  minb,
  maxb,
  addRecurse,
};
