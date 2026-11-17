const user = {
    name: "Rahul",

    greet: function () {
        console.log("Hello " + this.name);
    }
};

// Method call
user.greet(); 
// Output: Hello Rahul

// Standalone function call
const fn = user.greet;
fn(); 
// Output in strict mode: Hello undefined
// Output in non-strict mode: Hello undefined (if global.name is not set)

// Wahi function hai, lekin ab dot ke left koi object nahi — isliye this global ban gaya. Yeh proof hai ki this "kaise call kiya" par depend karta hai, "kahan likha" par nahi.