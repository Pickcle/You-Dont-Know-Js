Function.prototype.bind = function(context) {
  var me = this;
  var argsArray = Array.prototype.slice.call(arguments, 1);
  return function() {
    argsArray = argsArray.concat(Array.prototype.slice.call(arguments));
    return me.apply(context, argsArray);
  }
}

Object.prototype.toString.call(null);

function foo (a, b, c) {
  this.a = a;
  this.b = b;
  this.c = c;
}

var foo2 = foo.bind(null, 1, 2, 3);

var _foo = new foo2();

_foo.a // 1


function A(p1,p2) {
  console.log(this.num);
  console.log(p1);
  console.log(p2);
}

let o = {num:'num'}
A.bind(o)(1,2);
