const marks = {
  Anubhav: 95,
  Rahul: 82,
  Aman: 99,
};

let highest = -Infinity;

let topper;

for (let student in marks)
  if (marks[student] > highest) {
    highest = marks[student];
    topper = student;
  }

console.log(topper);
