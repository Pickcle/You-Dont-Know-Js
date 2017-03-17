let A = function() {}
A.staticCount = function() {
  this.count = this.count + 1;
}
A.count = 0;
let a = new A();
// a.staticCount();//找不到此方法
A.staticCount();
A.count;//1
