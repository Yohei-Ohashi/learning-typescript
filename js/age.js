"use strict";
/*
・ Personという抽象クラスを作る
・ Personを継承した、GuestとMemberというクラスを作る
・ Memberクラスには生年月日をプロパティにする
・ Memberクラスに年齢を取得するメソッドを定義する
*/
Object.defineProperty(exports, "__esModule", { value: true });
class Person {
    name;
    constructor(name) {
        this.name = name;
    }
}
class Guest extends Person {
}
class Member extends Person {
    _birth = new Date();
    constructor(name, birth) {
        super(name);
        this.birth = birth;
    }
    get birth() {
        return this._birth;
    }
    set birth(value) {
        this._birth = value;
    }
}
const yoshiko = new Member("Yoshiko", new Date(2000, 1, 3));
console.log(yoshiko.name);
let taro = new Guest("Taro");
console.log(taro.name);
//# sourceMappingURL=age.js.map