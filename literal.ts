let changingString = "Hello World";
changingString = "Olá Mundo";
const constantString = "Hello World";
constantString;

function compare(a: string, b: string): -1 | 0 | 1 {
    return a === b ? 0 : a > b ? 1 : -1;
  }
  console.log(compare('2', '2'));
  function doSomething(x: string | null) {
    if (x === null) {
      // do nothing
    } else {
      console.log("Hello, " + x.toUpperCase());
    }
  }
  