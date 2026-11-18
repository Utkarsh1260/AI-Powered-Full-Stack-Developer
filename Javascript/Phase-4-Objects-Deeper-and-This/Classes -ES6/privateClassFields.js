// Private Fields (`#`)
// `#` lagane se field **bahar se access nahi** ho sakta — sirf class ke andar.

class BankAccount {
  #balance = 0; // private field

  deposit(amount) { this.#balance += amount; }
  getBalance() { return this.#balance; }
}

const acc = new BankAccount();
acc.deposit(500);
console.log(acc.getBalance()); // 500
// console.log(acc.#balance); → SyntaxError: bahar se access nahi!