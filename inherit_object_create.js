//对象继承对象，使用Obejct.create来继承，一旦父对象改变，会影响所有子对象
let o = {
  a: 1,
  b: 2,
  sayA: function() {
    return this.a;
  }
};

//Object.create的polyfill
function create(obj) {
  function O(){};
  O.prototype = obj;
  return new O();
}

let o1 = Object.create(o);
let o2 = Object.create(o);

o1.a = 3;
o1.sayA();//3
o2.sayA();//1

o.b = 4;
o1.b;//4
o2.b;//4
