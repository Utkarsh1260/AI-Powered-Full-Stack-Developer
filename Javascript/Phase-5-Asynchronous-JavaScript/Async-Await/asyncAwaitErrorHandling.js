
function dataLao() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("Server down! 😵");
        }, 1000);
    });
}

async function main() {
    try {
        const data = await dataLao();
        console.log("Success:", data);
    } catch (error) {
        console.log("Error caught:", error);
    } finally {
        console.log("Cleanup completed!");
    }
}

main();

// Output after approximately 1 second:
// Error caught: Server down! 😵
// Cleanup completed!
