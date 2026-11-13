let prompt = require("prompt-sync")();


let student = [];

//add student
function addStudent() {
  let studentId = student.length + 1;
  let name = prompt("Enter the Name: ").toLowerCase();
  let rollNo = Number(prompt("Enter the rollNo: "));
  let age = Number(prompt("Enter the age: "));
  let Mb = Number(prompt("Enter the Mobile Number: "));
  let address = prompt("Enter the Home Address: ").toLowerCase();
  let course = prompt("Enter the Course: ").toLowerCase();
  let year = Number(prompt("Enter the year: "));
  let sem = Number(prompt("Enter the sem: "));
  let collegeName = prompt("Enter the College: ").toLowerCase();
  let attendance=[]

  let marks = {
    hindi: 0,
    english: 0,
    computer: 0,
    maths: 0,
    project: 0,
  };
  let avg = 0;
  let percentage = 0;

  student.push({
    id: studentId,
    name,
    rollNo,
    age,
    Mb,
    address,
    course,
    year,
    sem,
    attendance,
    collegeName,
    marks,
  });

  console.log("Student Added successfully");
}

// remove student
function removeStudent() {
  let rollNo = Number(prompt("Enter student rollNo: "));

  let idx = student.findIndex((s) => {
    return s.rollNo === rollNo;
  });

  if (idx === -1) {
    console.log("Student not found!");
    return;
  }

  student.splice(idx, 1);

  console.log("Student removed successfully!");
}

// mark attendance
function attendance() {
  let rollNo = Number(prompt("Enter student rollNo: "));
  let foundStudent = student.find((s) => {
    return s.rollNo === rollNo;
  });

  if (!foundStudent) {
    console.log("Student not found");
    return;
  }

  let date = prompt("Enter the Date (DD/MM/YYYY): ");
  let status = prompt("Enter the P/A: ").toUpperCase();

  if (status !== "P" && status !== "A") {
    console.log("Invalid attendance status!");
    return;
  }

  foundStudent.attendance.push({
    date: date,
    status: status,
  });

  console.log("Attendance marked successfully!");
}

//show subject marks
function showMarks() {
  let rollNo = Number(prompt("Enter student rollNo: "));
  let foundStudent = student.find((s) => {
    return s.rollNo === rollNo;
  });

  if (!foundStudent) {
    console.log("Student not found");
    return;
  }

  console.log(foundStudent.marks);
}

// display students
function displayStudent() {
  //  console.log(JSON.stringify(student, null, 2));
   console.log(student);
}

// Search a student
function searchStudent() {
  let rollNo = Number(prompt("Enter student rollNo: "));

  let foundStudent = student.find((s) => {
    return s.rollNo === rollNo;
  });

  if (!foundStudent) {
    console.log("Student not found!");
    return;
  }

  console.log(foundStudent);
}

// update student detail
function updateDetail() {
  let rollNo = Number(prompt("Enter student rollNo: "));

  let foundStudent = student.find((s) => {
    return s.rollNo === rollNo;
  });

  if (!foundStudent) {
    console.log("Student not found!");
    return;
  }

  console.log("What to Change");
  console.log(`
    1. Age
    2. Mobile Number
    3. Address
    4. Course
    5. Year
    6. Semester
    7. Marks
    `);

  let choice = Number(prompt("Select option: "));
  switch (choice) {
    case 1:
      foundStudent.age = Number(prompt("Enter New Age: "));
      break;

    case 2:
      foundStudent.Mb = Number(prompt("Enter New Mobile Number: "));
      break;

    case 3:
      foundStudent.address = prompt("Enter New Address: ").toLowerCase();
      break;

    case 4:
      foundStudent.course = prompt("Enter New Course: ").toLowerCase();
      break;

    case 5:
      foundStudent.year = Number(prompt("Enter New Year: "));
      break;

    case 6:
      foundStudent.sem = Number(prompt("Enter New Semester: "));
      break;

    case 7:
      console.log("Select Subject:");
      console.log(`
    1. Hindi
    2. English
    3. Computer
    4. Maths
    5. Project
    `);

      let subjectChoice = Number(prompt("Select Subject: "));

      switch (subjectChoice) {
        case 1:
          foundStudent.marks.hindi = Number(prompt("Enter Hindi marks: "));
          break;

        case 2:
          foundStudent.marks.english = Number(prompt("Enter English marks: "));
          break;

        case 3:
          foundStudent.marks.computer = Number(
            prompt("Enter Computer marks: "),
          );
          break;

        case 4:
          foundStudent.marks.maths = Number(prompt("Enter Maths marks: "));
          break;

        case 5:
          foundStudent.marks.project = Number(prompt("Enter Project marks: "));
          break;

        default:
          console.log("Invalid subject choice!");
      }
      break;
  }
}

// calculate avg
function avg() {
  let rollNo = Number(prompt("Enter student rollNo: "));
  let foundStudent = student.find((s) => {
    return s.rollNo === rollNo;
  });

  if (!foundStudent) {
    console.log("Student not found");
    return;
  }

  let total = Object.values(foundStudent.marks).reduce((acc, m) => {
    return acc + m;
  }, 0);

  let average = total / Object.values(foundStudent.marks).length;

  console.log("Average: ", average);
}


// user operation===========================================
// Main Menu
let choice;

while (choice !== 0) {

    console.log(`
    ===== STUDENT MANAGEMENT SYSTEM =====

    1. Add Student
    2. Remove Student
    3. Mark Attendance
    4. Show Subject Marks
    5. Display All Students
    6. Search Student
    7. Update Student Details
    8. Calculate Average
    0. Exit

    =====================================
    `);

    choice = Number(prompt("Select an operation: "));

    switch (choice) {

        case 1:
            addStudent();
            break;

        case 2:
            removeStudent();
            break;

        case 3:
            attendance();
            break;

        case 4:
            showMarks();
            break;

        case 5:
            displayStudent();
            break;

        case 6:
            searchStudent();
            break;

        case 7:
            updateDetail();
            break;

        case 8:
            avg();
            break;

        case 0:
            console.log("Exiting Student Management System. Goodbye!");
            break;

        default:
            console.log("Invalid choice! Please try again.");
    }
}