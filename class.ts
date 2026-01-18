class Item {
  // プロパティ
  name: string = "";
  stock: number = 0;

  // メソッド

}

let peach: Item = new Item();
peach.name = "もも";
peach.stock = 3;

console.log(peach.name);

let grapes: Item = new Item();
grapes.name = "ぶどう";
grapes.stock = 5;

console.log(grapes.name);