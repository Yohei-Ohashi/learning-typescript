"use strict";
/*
・ Personという抽象クラスを作る
・ Personを継承した、GuestとMemberというクラスを作る
・ Memberクラスには生年月日をプロパティにする
・ Memberクラスに年齢を取得するメソッドを定義する

・ 今年の年から、誕生日の年をひく
・ 誕生日の「年」を今年にして、今日の日付と比べる
・ もし、誕生日がまだ来ていなかったら、年齢から１を引く
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
    getAge() {
        const now = new Date();
        let age = now.getFullYear() - this.birth.getFullYear();
        let thisBirth = new Date(now.getFullYear(), this.birth.getMonth(), this.birth.getDate());
        if (now < thisBirth) {
            age--;
        }
        return age;
    }
}
const yoshiko = new Member("Yoshiko", new Date("2000-01-03"));
console.log(yoshiko.name);
console.log(yoshiko.getAge());
let taro = new Guest("Taro");
console.log(taro.name);
//# sourceMappingURL=age.js.map