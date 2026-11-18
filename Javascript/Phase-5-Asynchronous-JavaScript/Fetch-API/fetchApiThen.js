
fetch("https://jsonplaceholder.typicode.com/users/1")
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log("User Data:", data);
    })
    .catch((error) => {
        console.log("Error:", error);
    });

// Expected output:
// User Data: {
//   id: 1,
//   name: 'Leanne Graham',
//   username: 'Bret',
//   ...
// }
