//Function.bind方法的polyfill
function bind(fn, obj, ...args) {
  return function() {
    return fn.apply(obj, args);
  }
}
let sayName = function(age) {
  console.log(this.name);
  console.log(age);
}
let nick = {
  name: 'nick'
}
let alex = {
  name: 'alex'
}
window.name = 'window';
bind(sayName, nick, 20)();
bind(sayName, alex, 30)();
bind(sayName, this, 40)();
