function fetchUser(callback) {
    console.log("Fetching user details...");

    setTimeout(() => {
        let user = { id: 101, name: "Utkarsh" };
        callback(user); // Task completed, now execute the callback
    }, 2000);
}

fetchUser((result) => {
    console.log("User details received:", result);
});

// Fetching user details...
// (2 seconds later)
// User details received: { id: 101, name: 'Utkarsh' }