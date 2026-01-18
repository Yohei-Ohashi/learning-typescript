function getDice(): number {
  return Math.floor(Math.random() * 6 + 1);
}

function sayHello(): boolean {
  console.log("こんにちは！")
  return true;
}

sayHello();

console.log(getDice());
console.log(getDice());
console.log(getDice());
