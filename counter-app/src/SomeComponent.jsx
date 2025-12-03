function SomeComponent({ name, age, sayHello }) {
  return (
    <p onClick={sayHello}>
      名前：{name} 年齢：{age}
    </p>
  );
  <p>{sayHello()}</p>;
}

export default SomeComponent;
