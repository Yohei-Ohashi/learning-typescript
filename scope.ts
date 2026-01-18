let TAX: number = 1.1;
let add_tax = (price: number): number => {
  // TAX = 1.08;
  const tax: number = 1.08;
  console.log(TAX);
  const result: number = Math.floor(price * TAX);
  return result;
}

console.log(TAX);
console.log(add_tax(100));
console.log(TAX);