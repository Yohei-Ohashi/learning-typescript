"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Item {
    name = "";
    price = 0;
    getTaxPrice() {
        return this.price * 1.1; // 10%
    }
}
class Food extends Item {
    limit_date = 0;
    getTaxPrice() {
        return this.price * 1.08; // 8%
    }
}
const pencil = new Item();
pencil.name = "鉛筆";
pencil.price = 80;
console.log(pencil.getTaxPrice());
const peach = new Food();
peach.name = "もも";
peach.limit_date = 10;
peach.price = 150;
console.log(peach.getTaxPrice());
//# sourceMappingURL=class03.js.map