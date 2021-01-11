function foo1() {
  return {
      bar: "hello"
  };
}

function foo2() {
  return
  { //in another line this makes the code unreachable
      bar: "hello"
  };
}

console.log(foo1()); //will return "hello"
console.log(foo2()); //will return "hello"