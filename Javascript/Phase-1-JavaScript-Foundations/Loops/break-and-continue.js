
for (let i = 1; i <= 10; i++) {
    if (i === 3) {
        continue; // Skip number 3
    }

    if (i === 7) {
        break; // Exit the loop when i is 7
    }

    console.log(i);
}