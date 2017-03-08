function Foo(name) {
  this.name = name;
}

Foo.prototype.myName = function() {
  return this.name;
}

function Bar(name, label) {
  Foo.call(this, name);
  this.label = label;
}

let a = new Bar('a', 'obj a');
Object.getPrototypeOf(a) == Bar.prototype;//true
Bar.prototype.constructor == Bar;//true

Bar.prototype = Object.create(Foo.prototype);
Bar.prototype.myLabel = function() {
  return this.label;
}

let b = new Bar('b', 'obj b');
Object.getPrototypeOf(b) == Bar.prototype;//true
Bar.prototype.constructor == Foo;//true
