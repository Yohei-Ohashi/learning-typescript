"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const itemStr = '{"name": "いちご", "price": 150';
try {
    const item = JSON.parse(itemStr);
    console.log(item.name);
}
catch (error) {
    console.log("JSONの形式が正しくありません");
}
console.log("プログラムを続けました");
//# sourceMappingURL=json4.js.map