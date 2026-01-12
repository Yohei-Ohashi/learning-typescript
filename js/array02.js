"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const items = ["イチゴ", "りんご", "バナナ"];
items.push("みかん");
items.unshift("ぶどう");
console.table(items);
items[0] = "オレンジ";
console.table(items);
items.shift();
items.pop();
console.table(items);
console.log(items.slice(1, 3));
//# sourceMappingURL=array02.js.map