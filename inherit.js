let o = {
  a: 1,
  b: 2,
  log: function() {
    console.log('a:' + a, 'b:' + b);
  }
};

function A(obj) {
  let newObj = Object.create(obj);
  return newObj;
}

let a = new A(o);
let b = new A(o);

function class(superCls) {
  
}
