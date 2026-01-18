"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Item {
    _name = "";
    _stock = 0;
    constructor(name, stock) {
        this.name = name;
        this.stock = stock;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get stock() {
        return this._stock;
    }
    set stock(value) {
        if (value >= 0) {
            this._stock = value;
        }
        else {
            this._stock = 0;
        }
    }
}
let peach = new Item("もも", 5);
console.log(peach.stock);
//# sourceMappingURL=class02.js.map