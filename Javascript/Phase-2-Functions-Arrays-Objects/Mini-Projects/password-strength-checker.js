let prompt = require("prompt-sync")();

function passwordStrengthChecker(psw) {
    if(!psw) {console.log("0"); return};
    let score=0;

    if(psw.length >=8) score++;
    if(psw.length >=12) score++;
    if(psw.length >=16) score++;

    if(/[a-z]/.test(psw)) score++;
    if(/[A-Z]/.test(psw)) score++;
    if(/[0-9]/.test(psw)) score++;
    if(/[^A-Za-z0-9]/.test(psw)) score++;

        let strength;

    if (score <= 2) {
        strength = "Weak";
    } else if (score <= 3) {
        strength = "Medium";
    } else if (score <= 4) {
        strength = "Strong";
    } else {
        strength = "Very Strong";
    }

    console.log("Password Strength:", strength);
    console.log("Score:", score, "/ 7");
}

let choice;
while (choice !== 0) {
  console.log(`
    ===== PASSWORD STRENGTH CHECKER =====

    1. Check Password Strength
    0. Exit

    =====================================
    `);

  choice = Number(prompt("Select an operation: "));
  switch (choice) {
    case 1:
      let psw = prompt("Enter Password: ");
      passwordStrengthChecker(psw);
      break;

    case 0:
      console.log(`
            Thankyou for visiting
            Exiting...`);
      break;

    default:
      console.log("Invalid Choice");
      console.log("try again!");
  }
}
