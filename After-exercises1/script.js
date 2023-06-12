'use strict'
// Please don't delete the 'use strict' line above

//Lesson1-3 中級演習 応用実験

//【中級演習】
//1. あなたが予想した答えは少し違うかもしれませんが、心配しないでください。 結果が予想した値より近ければ正解です。
// 円の円周と面積を計算して保存する

// const circleDiameter = 10;
// const Pi = 3.141592;  // ここにあなたのコードを書いてください

// let circleCircumference = circleDiameter * Pi; //「31.41592」が表示される
// let circleArea = ((circleDiameter / 2) **2 ) * Pi; //「78.5398」が表示される

// console.log(circleCircumference); // "31.41592653589793" に近い値を表示
// console.log(circleArea); // "78.53981633974483" に近い値を表示


//2. 値を直接再割り当てせずにaとbの値を置いて、期待通りの値が出力されるようにしましょう。
//ヒント：データを一時的に保存するために別の変数を作成する必要があります。

// let a = "B";
// let b = "A";
// let c = null;

// c = a;  //cはから代入して"B"になる
// a = b;  //aはbを代入して"A"になる
// b = c;  //bはからc(a = "B")を代入して"B"になる

// console.log(a); // "A" を表示
// console.log(b); // "B" を表示

//3. 関数の成長 (指数関数的成長) を実現してみましょう。変数の値を変更して、2 の適切な乗を求めましょう。

// let value = 1;
// const exponentiation = 2;

// console.log(value); // "1" を表示

// // value に何かを行う

// value = value * exponentiation;
// console.log(value); // "2" を表示

// // value に何かを行う
// value = value * exponentiation;
// console.log(value); // "4" を表示

// // value に何かを行う
// value = value * exponentiation;
// console.log(value); // "8" を表示

// // value に何かを行う
// value = value * exponentiation;
// console.log(value); // "16" を表示

// // value に何かを行う
// value = value * exponentiation;
// console.log(value); // "32" を表示

// // value に何かを行う
// value = value * exponentiation;
// console.log(value); // "64" を表示

//4. 文字列結合に挑戦しましょう。いろいろな変数を連結して、期待している結果を表示してください。
// const firstName = "Fan";
// const lastName = "Yan";
// const city = "Tokyo";

// console.log("Hello, my name is " + lastName + " " + firstName + ". I live in " + "Tokyo" + "."); 
// // "Hello, my name is Yan Fan. I live in Tokyo." を表示


//【応用実験】
//1. counterこれが呼ばれたら、常に最近呼び出された時よりも 1 つ大きな数値をで表示しましょうconsole.log。
// function counter(i) {
//   console.log(i);
//   return i;
// }

// counter(1); // => 1
// counter(2); // => 2
// counter(3); // => 3


//2. isOddこれが呼ばれたら、与えられた数値が奇数かどうかで表示しましょうconsole.log。

// function isOdd(givenNumber) {
//   if (givenNumber % 2 === 1) {
//     console.log("Yes, it's odd");
//   }
//   else {
//     console.log("No, it's even");
//   }
//   return givenNumber;
// }
// isOdd(11); //「"Yes, it's odd"」と表示される
// isOdd(20); //「"No, it's even"」と表示される