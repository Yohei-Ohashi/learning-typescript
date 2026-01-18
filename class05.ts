interface Item {
  name: string;
  price: number;
  getTaxPrice(): number;
}

interface Size {
  width: number;
  height: number;
}

interface FoodItem extends Item {
  limit: number;
}

class Food implements FoodItem {
  name: string = "";
  price: number = 0;
  limit: number = 0;
  getTaxPrice(): number {
    return this.price * 1.08;  // 8%
  }
}

class Stationery implements Item, Size {
  name: string = "";
  price: number = 0;
  width: number = 0;
  height: number = 0;
  getTaxPrice(): number {
    return this.price * 1.1;  // 10%
  }
}

const peach = new Food();
peach.price = 150;
console.log(peach.getTaxPrice());