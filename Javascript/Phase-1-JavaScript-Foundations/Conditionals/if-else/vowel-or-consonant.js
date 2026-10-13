let char = "e".toLowerCase();

if (!/^[a-z]$/.test(char)) {
    console.log("Invalid character");
} else if ("aeiou".includes(char)) {
    console.log("Vowel");
} else {
    console.log("Consonant");
}