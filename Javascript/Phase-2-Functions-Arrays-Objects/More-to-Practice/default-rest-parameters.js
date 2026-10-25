//default parameter
function sum(a, b = 5) {
  console.log(a + b);
}

// function sum(a,b=5){
//  console.log(a+b);
// } it will give NaN

sum(10, 20);
sum(10);

// rest parameter
function sum2(...nums) {
  console.log(nums);
  let total = 0;

  numbers.forEach((nums) => {
    total += nums;
  });

  console.log(total);
}
sum2(10,20,30);

// rest with regular parameter
// function show(a, b, ...others) {
//   console.log(a);
//   console.log(b);
//   console.log(others);
// }

// show(10, 20, 30, 40, 50);



