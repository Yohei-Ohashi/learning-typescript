"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getRandomChar(...chars) {
    const index = Math.floor(Math.random() * chars.length);
    return chars[index];
}
console.log(getRandomChar("1", "a", "A", "B", "C"));
//# sourceMappingURL=function03.js.map