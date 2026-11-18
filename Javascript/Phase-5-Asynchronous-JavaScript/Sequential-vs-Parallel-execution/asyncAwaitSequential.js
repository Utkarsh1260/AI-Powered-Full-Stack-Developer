
function kaam(naam, time) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`${naam} done`);
        }, time);
    });
}

async function sequential() {
    console.time("sequential");

    const a = await kaam("A", 2000); // Wait 2 seconds
    const b = await kaam("B", 2000); // Wait another 2 seconds
    const c = await kaam("C", 2000); // Wait another 2 seconds

    console.log(a, b, c);

    console.timeEnd("sequential");
}

sequential();

// Expected output after approximately 6 seconds:
//
// A done B done C done
// sequential: ~6000 ms
