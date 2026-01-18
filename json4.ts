const itemStr: string = '{"name": "いちご", "price": 150';

try {
  const item: any = JSON.parse(itemStr);
  console.log(item.name);
} catch (error) {
  console.log("JSONの形式が正しくありません");
}

console.log("プログラムを続けました")