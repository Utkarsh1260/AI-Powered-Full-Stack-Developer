function pipe(...functions) {
  return function (value) {
    return functions.reduce((acc, fn) => {
      return fn(acc);
    }, value);
  };
}

function double(num) {
  return num * 2;
}

function addFive(num) {
  return num + 5;
}

function square(num) {
  return num * num;
}

let calculate = pipe(double, addFive, square);

console.log(calculate(5));
