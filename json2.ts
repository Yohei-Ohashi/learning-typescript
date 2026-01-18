const itemStr: string = '{"name": "いちご", "price": 150}';
const item: any = JSON.parse(itemStr);
console.log(item.name);

const itemStr2 = JSON.stringify(item);
console.log(itemStr2);