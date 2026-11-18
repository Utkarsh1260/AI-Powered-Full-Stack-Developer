
function kaam(naam, time) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`${naam} done`);
        }, time);
    });
}

async function parallel() {
    console.time("parallel");

    // Start all three tasks immediately
    const pa = kaam("A", 2000);
    const pb = kaam("B", 2000);
    const pc = kaam("C", 2000);

    // Wait for all three Promises to fulfill
    const [a, b, c] = await Promise.all([pa, pb, pc]);

    console.log(a, b, c);

    console.timeEnd("parallel");
}

parallel();

// Expected output after approximately 2 seconds:
//
// A done B done C done
// parallel: ~2000 ms
