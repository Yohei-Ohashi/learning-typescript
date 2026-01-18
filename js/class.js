"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Item {
    // プロパティ
    name = "";
    stock = 0;
    // メソッド
    buy(quantity) {
        if (this.stock >= quantity) {
            this.stock -= quantity;
            return true;
        }
        else {
            return false;
        }
    }
}
let peach = new Item();
peach.name = "もも";
peach.stock = 3;
console.log(peach.name);
console.log(peach.buy(2));
console.log(peach.buy(1));
let grapes = new Item();
grapes.name = "ぶどう";
grapes.stock = 5;
console.log(grapes.name);
//# sourceMappingURL=class.js.map