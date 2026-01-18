class Item {
  private _name: string = "";
  private _stock: number = 0;

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }
  
  get stock(): number {
    return this._stock;
  }
  
  set stock(value: number) {
    if (value >= 0) {
      this._stock = value;
    } else {
      this._stock = 0;
    }
  }
}

let peach = new Item();
peach.name = "もも";
peach.stock = 3;

console.log(peach.stock);