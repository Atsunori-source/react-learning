//　関数をエクスポートしている
export const hello = () => {
  console.log("hello!");
};

// 一つのファイルに一つだけdefaultを定義できる;
const funcB = () => {
  console.log("funcB output");
};

export default funcB;

// オブジェクトリテラルをエクスポートしている
class User {
  constructor(name) {
    this.name = name;
  }
  hello() {
    console.log(this.name);
  }
}

export { User };
