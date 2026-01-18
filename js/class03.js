"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Item {
    name = "";
    price = 0;
}
class Food extends Item {
    limit_date = 0;
}
const pencil = new Item();
pencil.name = "鉛筆";
const peach = new Food();
peach.name = "もも";
peach.limit_date = 10;
//# sourceMappingURL=class03.js.map