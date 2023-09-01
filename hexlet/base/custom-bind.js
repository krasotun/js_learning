function foo(arg1, arg2, arg3) {
  return arg1 + arg2 + arg3;
}

function customBuild(obj = null, fn) {
  return function foo(...args) {
    return fn.call(obj, ...args);
  };
}

console.log(customBuild(foo(1, 2, 3)));
