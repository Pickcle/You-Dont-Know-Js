let Parent = {
  a: 1,
  b: 2,
  log: function() {
    console.log('a:' + a, 'b:' + b);
  }
}

function class(superCls) {
  
}

let a = class(Parent);
let b = class(Parent);
