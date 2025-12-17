// webpackとかのモジュールバンドラがあれば.jsはいらないけど今回は必要
import { hello } from "./module.js";
import { User } from "./module.js";

// デフォルトは波括弧が必要ない
// デフォルトに限ってfunB以外の名前に変えることができる
import funcB from "./module.js";

hello();

new user = new User("atsu");
user.hello();