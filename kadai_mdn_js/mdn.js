// 今日の日付を取得する
const date = new Date();
const [month, day, year] = [
  date.getMonth() + 1,
  date.getDate(),
  date.getFullYear(),
];

// コンソールに年月日形式で出力する
console.log(year + '年' + month + '月' + day + '日');