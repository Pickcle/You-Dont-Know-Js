let o = {
  a: 1,
  b: 2
};

let o1 = Object.create(o);
let o2 = Object.create(o);

o1.a = 3;
o1.a;//3
o2.b;//1

o.b = 4;
o1.b;//4
o2.b;//4
//使用Obejct.create来继承，一旦父对象改变，会影响所有子对象
