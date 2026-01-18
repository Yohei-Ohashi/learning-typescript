"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const itemStr = '{"name": "いちご", "price": 150}';
const item = JSON.parse(itemStr);
console.log(item.name);
const itemStr2 = JSON.stringify(item);
console.log(itemStr2);
//# sourceMappingURL=json2.js.map