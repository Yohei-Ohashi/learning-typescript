class Item {
  // プロパティ
  name: string = "";
  stock: number = 0;

  // メソッド
  buy(quantity: number): boolean {
    if (this.stock >= quantity) {
      this.stock -= quantity;
      return true;
    } else {
      return false;
    }
  }
}

let peach: Item = new Item();
peach.name = "もも";
peach.stock = 3;

console.log(peach.name);
console.log(peach.buy(2));
console.log(peach.buy(1));

let grapes: Item = new Item();
grapes.name = "ぶどう";
grapes.stock = 5;

console.log(grapes.name);