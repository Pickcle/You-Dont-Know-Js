let g1 = g2 => {
  console.log('g2', g2);
}
g1(1);//'g2 1'

let f1 = f2 => f3 => {
  console.log('f2', f2);
  console.log('f3', f3);
}
f1(1);
//f3 => {
//   console.log('f2', f2);
//   console.log('f3', f3);
// }
f1(1)(2)
//f2 1
//f3 2
let h1 = h2 => h3 => h4 =>{
  console.log('h2', h2);
  console.log('h3', h3);
  console.log('h4', h4);
}
h1(1);
// h3 => h4 =>{
//   console.log('h2', h2);
//   console.log('h3', h3);
//   console.log('h4', h4);
// }
h1(1)(2)
// h4 =>{
//   console.log('h2', h2);
//   console.log('h3', h3);
//   console.log('h4', h4);
// }
h1(1)(2)(3)
//h2 1
//h3 2
//h4 3
