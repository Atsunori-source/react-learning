function print(callback) {
  // コンソールにはfnが出力される
  console.log(fn);
  const result = callback();
  console.log(result);
}

function fn(number) {
  return number * 2;
}
// fnをコールバックに渡しているが、引数がないためコンソールにはNaNと表示される
// undefined→値が未定義ということで渡される
debugger;
print(fn);

// numberの初期値が3とすれば6と出力される
function fn2(number = 3) {
  return number * 2;
}

console.log(fn(2));
console.log(fn(4));

const fnArrow = (number) => {
  console.log(number);
  return number * 2;
};

const fnArrowObj = (number) => ({ result: number * 2 });

console.log(fnArrowObj(2));
