"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let dice;
for (let i = 0; i < 100; i++) {
    dice = Math.floor(Math.random() * 6 + 1);
    console.log(`${i + 1}回目: ${dice}`);
    if (dice === 1) {
        break;
        //continue;
    }
}
//# sourceMappingURL=break.js.map