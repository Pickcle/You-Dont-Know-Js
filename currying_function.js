function add(...args) {
  return function(...args2) {
    return args[0] + args2[0];
  }
}

// console.log(add(2, 5));
// console.log(add(2)(5));
