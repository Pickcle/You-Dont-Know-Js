function A(a) {
  this.a = a;
  this.b = 3;
}

A.prototype.sayA = function() {
  return this.a;
}

A.prototype.sayB = function() {
  return this.b;
}

let a = new A(1);
let b = new A(2);

a instanceof A;//true

a.sayA();//1
b.sayA();//2
a.sayB();//3
b.sayB();//3
