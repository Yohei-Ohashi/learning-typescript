"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
・ コマンドラインパラメータを受け取る
・ パラメータの点数を使って、「合計」「最高点」「最低点」「平均」を求める
・ 合計と平均を求める関数を作る
*/
function get_sum(score) {
    // 合計を求める
    let sum = 0;
    for (let i = 0; i < score.length; i++) {
        sum += score[i];
    }
    return sum;
}
const get_average = (score) => get_sum(score) / score.length;
const score = [];
for (let i = 2; i < process.argv.length; i++) {
    score.push(Number(process.argv[i]));
}
console.table(score);
console.log(`人数: ${score.length}人`);
console.log(`最高点: ${Math.max(...score)}`);
console.log(`最低点: ${Math.min(...score)}`);
console.log(`合計: ${get_sum(score)}`);
console.log(`平均: ${get_average(score)}`);
//# sourceMappingURL=average.js.map