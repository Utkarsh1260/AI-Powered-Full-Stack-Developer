function fetchUser(callback) {
    setTimeout(() => {
        let error = null;
        let user = { id: 101, name: "Utkarsh" };

        if (error) {
            callback(error, null);
        } else {
            callback(null, user); // First null means no error
        }
    }, 1000);
}

fetchUser((err, result) => {
    if (err) {
        console.log("Error occurred:", err);
        return;
    }

    console.log("Success:", result);
});

// Output:
// Success: { id: 101, name: 'Utkarsh' }