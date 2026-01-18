"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let TAX = 1.1;
let add_tax = (price) => {
    // TAX = 1.08;
    const tax = 1.08;
    console.log(TAX);
    const result = Math.floor(price * TAX);
    return result;
};
console.log(TAX);
console.log(add_tax(100));
console.log(TAX);
//# sourceMappingURL=scope.js.map