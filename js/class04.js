"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Item {
    name = "";
    price = 0;
}
class Food extends Item {
    getTaxPrice() {
        return this.price * 1.08; // 8%
    }
}
class Stationery extends Item {
    getTaxPrice() {
        return this.price * 1.1; // 10%
    }
}
const peach = new Food();
peach.name = "もも";
console.log(peach.name);
const pencil = new Stationery();
pencil.price = 80;
console.log(pencil.getTaxPrice());
//# sourceMappingURL=class04.js.map