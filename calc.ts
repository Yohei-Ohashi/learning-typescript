const num1: number = Number(process.argv[2]);
const num2: number = Number(process.argv[3]);
const formula: string = `${num1} + ${num2} =`;
const result: number = num1 + num2;

console.log(`${formula} ${result}`);