
let age = 20;
let hasLicense = true;

if (age >= 18) {
    console.log("Age requirement satisfied.");

    if (hasLicense) {
        console.log("Can drive");
    } else {
        console.log("Get a license first");
    }
} else {
    console.log("Too young to drive");
}
