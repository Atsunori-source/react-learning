# React 学習ログ

## Day 1: カウンターアプリ
- useState の使い方を理解
- props の渡し方を学んだ（親 → 子）
- コンポーネント分割で読みやすくなることを知った

## 学んだことメモ
- style は文字列じゃなくてオブジェクトで渡す
- props の “左側” が渡す名前、子で受け取るキーになる

## Day 2：色変更アプリ

### 🔍 学んだこと
- useState の初期値は React が保持しないため、必要なら外部変数で管理する
- 配列＋map() で UI を動的に生成できる
- key は React が要素を識別するために必要
- props を使って子コンポーネントで親の state を変更できる

### 📝 実装したもの
- 色変更ボタン（赤・青・緑）
- リセットボタン（初期色に戻す）
- ColorButton コンポーネントを作成し、props で制御

### 🚀 次やること
- ランダム色変更ボタン
- input で自由に色変更

## 📅 Day 3：自由入力で色変更（Controlled Component）

### 🔍 学んだこと
- setState（setColor / setInputColor）が呼ばれると React は再レンダリングする
- UI は state の「現在の値」だけで描画されるという React の基本思想
- input の値を state で管理する Controlled Component の仕組み
- onChange で state を更新し、UI を同期させる動きの理解

### 📝 実装したもの
- input に色名を入力して背景色を変更できる機能
- 入力値を state（inputColor）で管理
- 変更ボタンを押すと背景色を動的に反映
