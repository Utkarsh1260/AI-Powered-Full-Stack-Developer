
async function userBanao() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: "Rahul",
                email: "rahul@example.com"
            })
        });

        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }

        const data = await response.json();

        console.log("User created:", data);

    } catch (error) {
        console.log("Error:", error.message);
    }
}

userBanao();
