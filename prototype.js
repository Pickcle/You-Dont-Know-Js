//使用关键词new对函数使用，构造一个新对象来关联函数的prototype
let f = function(name) {this.name = name};
f.prototype.say = function() {console.log(this.name)}
f.prototype.constructor == f;//true

let fa = new f('fa');
Object.getPrototypeOf(fa) == f.prototype;//true
fa.say();//fa
fa.constructor == f;//true

let fb = new f('fb');
Object.getPrototypeOf(fa) == Object.getPrototypeOf(fb);//true
fb.say();//fb

//使用Object.create这种方式的继承不会有constructor
let fc = Object.create(f);
fc.say();

let o = {a:1, b:2};
let o1 = Object.create(o);
Object.getPrototypeOf(o1) == o;//true

let ff = function(){};
ff.prototype = o;
let o2 = new ff();
