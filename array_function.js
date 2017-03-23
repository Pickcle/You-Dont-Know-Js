var arr = [
  {name: 'apple', id: 1},
  {name: 'apple', id: 2},
  {name: 'banana', id: 3},
  {name: 'orange', id: 4}
]

//筛除某些元素
arr.filter((value) => {
  return value.name == 'apple'
})
//[{name: 'apple', id: 1}, {name: 'apple', id: 2}]

//无返回值
arr.forEach((value, index) => {
  console.log('index:' + index);
})
//index: 0
  index: 1
  index: 2
  index: 3

//有返回值
var arr2 = arr.map((value, index) => {
  return index;
})
console.log(arr2)
//[0,1,2,3]

arr.reduce((prev, next, index) => {
  return prev + next.id;
}, 0)
//10

arr.reduce((prev, next) => {
  prev[next.name] = prev[next.name] + 1 || 1;
  return prev;
}, {})
//{'apple': 2, 'banana': 1, 'orange': 1}

//一直运行直到返回true
arr.some((value, index) => {
  return value.name == 'banana';
})
//true

//一直运行直到返回false
arr.every((value, index) => {
  return value.id < 5;
})
//true
