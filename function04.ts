// 関数宣言
function add1(a: number, b:number): number {
  return a + b;
}
console.log(add1(1, 2));

// 関数式
const add2 = function(a: number, b: number): number {
  return a + b;
}
console.log(add2(3, 4));

// アロー関数
const add3 = (a: number, b:number): number => a + b;
console.log(add3(5, 6));

const add4 = (a: number, b:number): number => {
  return a + b;
};
console.log(add4(7, 8));
