"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function print_name(name) {
    if (typeof name === "string") {
        console.log(`${name}さん`);
    }
    else {
        for (const n of name) {
            console.log(`${n}さん`);
        }
    }
}
print_name("田中");
print_name(["田中", "鈴木", "高橋"]);
//# sourceMappingURL=function05.js.map