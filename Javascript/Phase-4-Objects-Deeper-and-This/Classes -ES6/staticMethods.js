// static wali cheezein object par nahi, class par hoti hain. Inhe instance se nahi, directly class se call karte ho.

class MathHelper {
  static PI = 3.14159;          // static property
  static add(a, b) { return a + b; } // static method
}

console.log(MathHelper.add(2, 3)); // 5  (class se call)
console.log(MathHelper.PI);        // 3.14159

const m = new MathHelper();
// m.add(2, 3); → Error: static method instance par nahi hota