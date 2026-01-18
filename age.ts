/* 
・ Personという抽象クラスを作る
・ Personを継承した、GuestとMemberというクラスを作る
・ Memberクラスには生年月日をプロパティにする
・ Memberクラスに年齢を取得するメソッドを定義する
*/

abstract class Person {
  public name: string;
  constructor(name: string) {
    this.name = name;
  }
}

class Guest extends Person {

}

class Member extends Person {
  private _birth: Date = new Date();

  constructor(name: string, birth: Date) {
    super(name);
    this.birth = birth;
  }

  get birth(): Date {
    return this._birth;
  }

  set birth(value: Date) {
    this._birth = value;
  }
}


const yoshiko = new Member("Yoshiko", new Date(2000, 1, 3));
console.log(yoshiko.name);

let taro: Guest = new Guest("Taro");
console.log(taro.name);