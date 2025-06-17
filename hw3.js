// Task 1: Immutability and Pure Functions
export function calculateDiscountedPrice(products, discount) {
  return products.map(product => ({
    ...product,
    price: product.price - (product.price * discount / 100)
  }));
}

export function calculateTotalPrice(products) {
  return products.reduce((total, product) => total + product.price, 0);
}

// Task 2: Function Composition and Point-Free Style
export const getFullName = person => `${person.firstName} ${person.lastName}`;

export const filterUniqueWords = text =>
  [...new Set(text.toLowerCase().match(/\b\w+\b/g))].sort();

export const getAverageGrade = students =>
  students
    .flatMap(student => student.grades)
    .reduce((sum, grade, _, arr) => sum + grade / arr.length, 0);


// Task 3: Closures and Higher-Order Functions
export function createCounter() {
  let count = 0;
  return function () {
    return ++count;
  };
}

export function repeatFunction(fn, times) {
  if (times < 0) {
    return function infiniteRunner() {
      while (true) fn();
    };
  }

  return function () {
    for (let i = 0; i < times; i++) {
      fn();
    }
  };
}

// Task 4: Recursion and Tail Call Optimization
export function calculateFactorial(n, acc = 1) {
  if (n <= 1) return acc;
  return calculateFactorial(n - 1, acc * n);
}

export function power(base, exponent) {
  if (exponent === 0) return 1;
  return base * power(base, exponent - 1);
}

// Task 5: Lazy Evaluation and Generators (no yield)
export function lazyMap(array, fn) {
  let index = 0;
  return {
    next: function () {
      if (index < array.length) {
        const value = fn(array[index]);
        index++;
        return { value, done: false };
      } else {
        return { done: true };
      }
    }
  };
}

export function fibonacciGenerator() {
  let a = 0, b = 1;
  return {
    next: function () {
      let current = a;
      [a, b] = [b, a + b];
      return { value: current, done: false };
    }
  };
} 
