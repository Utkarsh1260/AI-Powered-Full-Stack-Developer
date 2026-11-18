function dataLao() {
    return new Promise((resolve, reject) => {
        console.log("Data laa raha hoon...");

        setTimeout(() => {
            let error = null;
            let data = { id: 1, naam: "Aman" };

            if (error) {
                reject(error);
            } else {
                resolve(data);
            }
        }, 2000);
    });
}

dataLao()
    .then((data) => {
        console.log("Success:", data);
    })
    .catch((error) => {
        console.log("Error:", error);
    })
    .finally(() => {
        console.log("Kaam khatam (chahe pass ho ya fail)");
    });

// Output:
// Data laa raha hoon...
// (2 seconds later)
// Success: { id: 1, naam: 'Aman' }
// Kaam khatam (chahe pass ho ya fail)