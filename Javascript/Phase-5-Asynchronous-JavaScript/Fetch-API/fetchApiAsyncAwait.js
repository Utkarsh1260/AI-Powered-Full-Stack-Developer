
async function getUser() {
    try {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users/1"
        );

        const data = await response.json();

        console.log("User Data:", data);
    } catch (error) {
        console.log("Error:", error);
    }
}

getUser();
