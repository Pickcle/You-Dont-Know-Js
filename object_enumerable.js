let obj = {};
Object.defineProperty(obj, 'a', {
  value: 1,
  enumerable: true
})

Object.defineProperty(obj, 'b', {
  value: 2,
  enumerable: false
})

//enumerable为false的属性不会被in操作符检查到
(a in obj);//true
(b in obj);//false

//propertyIsEnumerable()可以检查属性是否enumerable
obj.propertyIsEnumerable('a');//true
obj.propertyIsEnumerable('b');//false

//Object.keys()会返回可枚举属性
Object.keys(obj);//['a']
//Object.getOwnPropertyNames包含所有属性，无论是否可枚举
Object.getOwnPropertyNames(obj);//['a','b']
