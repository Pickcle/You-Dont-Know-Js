//类继承类，原型继承
function Foo(name) {
  this.name = name;
}

Foo.prototype.myName = function() {
  return this.name;
}

//Bar可以视为Foo的子类
function Bar(name, label) {
  Foo.call(this, name);
  this.label = label;
}
Bar.prototype.constructor == Bar;//true

let a = new Bar('a', 'obj a');
Object.getPrototypeOf(a) == Bar.prototype;//true
//a.constructor其实是Object.getPrototypeOf(a)的constructor是Bar
//如果Bar.prototype改变了，a.constructor也会改变
a.constructor == Bar;//true

Bar.prototype = Object.create(Foo.prototype);
Bar.prototype.myLabel = function() {
  return this.label;
}

let b = new Bar('b', 'obj b');
Object.getPrototypeOf(b) == Bar.prototype;//true
Bar.prototype.constructor == Foo;//true
b.constructor == Foo;//true
