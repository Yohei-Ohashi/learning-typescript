class Item {
  name: string = "";
  price: number = 0;
}

class Food extends Item {
  limit_date: number = 0;
}

const pencil = new Item();
pencil.name = "鉛筆";

const peach = new Food();
peach.name = "もも";
peach.limit_date = 10;