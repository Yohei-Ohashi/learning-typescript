/* 
・ コマンドラインパラメータを受け取る
・ パラメータの点数を使って、「合計」「最高点」「最低点」「平均」を求める
・ 合計と平均を求める関数を作る
*/
const score: number[] = [];
for (let i=2; i < process.argv.length; i++) {
  score.push(Number(process.argv[i]));
}

console.table(score);