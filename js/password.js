"use strict";
/*
・必要なパスワードの長さをパラメーターで指定できる
・指定された長さで、アルファベットの大文字・小文字と数字、記号を組み合わせたランダムのパスワードが生成される
・生成されたパスワードを画面に表示する

---

・あらかじめ、パスワードの元となる文字列を配列として準備する
・パラメータを受け取って、パスワードの長さを得る
・乱数を使って、配列の中から適当な一文字列を取り出す
・指定された長さまで繰り返し行う
・画面に表示する
*/
Object.defineProperty(exports, "__esModule", { value: true });
const seeds = [
    "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
    "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
    "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "+", "=", "[", "]", "{", "}", "|", ":", ";", ",", ".", "/", "?",
    "~", "`", ".", " ",
];
const passwordLength = Number(process.argv[2]);
let password = "";
let random;
for (let i = 0; i < passwordLength; i++) {
    random = Math.floor(Math.random() * seeds.length);
    password += seeds[random];
}
console.log(password);
//# sourceMappingURL=password.js.map