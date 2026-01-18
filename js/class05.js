"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Food {
    name = "";
    price = 0;
    limit = 0;
    getTaxPrice() {
        return this.price * 1.08; // 8%
    }
}
class Stationery {
    name = "";
    price = 0;
    width = 0;
    height = 0;
    getTaxPrice() {
        return this.price * 1.1; // 10%
    }
}
const peach = new Food();
peach.price = 150;
console.log(peach.getTaxPrice());
//# sourceMappingURL=class05.js.map