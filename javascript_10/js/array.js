// 配列の宣言と値の代入を行う
const userNames = ['侍太郎', '侍一郎', '侍二郎', '侍三郎', '侍四郎'];

// 配列の値を出力する
console.log(userNames);

// 2番目の要素を更新する
userNames[1] = '侍花子';

// 6番目に要素を追加する
userNames[5] = '侍五郎';

// 配列の値を出力する
console.log(userNames);

 // 3番目の要素を出力する
 console.log(userNames[2]);

// 配列の要素数を出力する
console.log(userNames.length);

// 配列の値を全て出力する
for (let i = 0; i < userNames.length; i++) {
  console.log(userNames[i]);
}