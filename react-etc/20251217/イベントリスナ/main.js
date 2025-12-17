// DOMとはHTMLの一つずつのタグ。
// JSから操作するときに使用するもの
// それぞれのタグはDOMオブジェクトに紐づいている
// JSではタグが使えないからDOMオブジェクトを通してHTMLを操作する

// H1タグを取得する
const h1Element = document.querySelector("h1");
console.dir(h1Element);
console.log(h1Element.textContent);
h1Element.textContent = "変更後のタイトル";

// DOMのオブジェクトとして見たいときには「console.dir」を使う

// JS内からHTMLを操作するためのオブジェクトをDOMという

// イベントリスナー
const btnEL = document.querySelector("button");
btnEL.addEventListener("click", (e) => {
  console.log(e);
  console.dir(e.target);
  console.log("hello");
});

// 引数のeとは、情報の発火に伴う情報が入っている

// イベントリスナに登録する関数のことはイベントハンドラまたはアクションと呼ばれる
// 無名関数を入れることもできるし、事前に作っておいた関数を入れることもできる
