function compose(...functions) {
  return function (value) {
    return functions.reduceRight((acc, fn) => {
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

let calculate = compose(double, addFive, square);

console.log(calculate(5));
