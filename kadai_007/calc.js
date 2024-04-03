// 変数numに0～15までのランダムな整数を代入する
let num = Math.floor(Math.random() * 14);

// 変数numの値を出力する（確認用）
console.log(num);

// 変数numの値によって、出力する文字列を切り替える
if (num === 3 || num === 6 || num === 9 || num === 12) {
    console.log('3の倍数です');
}
else if (num === 5 || num === 10) {
  console.log('5の倍数です');
}
else if (num === 15) {
  console.log('3と5の倍数です');
}
else {
  console.log(num);
}  
