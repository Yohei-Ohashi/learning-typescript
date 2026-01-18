"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 関数宣言
function add1(a, b) {
    return a + b;
}
console.log(add1(1, 2));
// 関数式
const add2 = function (a, b) {
    return a + b;
};
console.log(add2(3, 4));
// アロー関数
const add3 = (a, b) => a + b;
console.log(add3(5, 6));
const add4 = (a, b) => {
    return a + b;
};
console.log(add4(7, 8));
//# sourceMappingURL=function04.js.map