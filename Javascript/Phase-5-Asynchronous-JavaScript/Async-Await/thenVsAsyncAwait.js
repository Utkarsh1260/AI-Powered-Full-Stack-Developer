
function dataLao() {
    return new Promise((resolve) => {
        setTimeout(() => {
            const data = {
                id: 101,
                name: "Utkarsh"
            };

            resolve(data);
        }, 2000);
    });
}

// Using .then()
dataLao().then((data) => {
    console.log("Using .then():", data);
});

// Using async/await
async function show() {
    const data = await dataLao();
    console.log("Using async/await:", data);
}

show();

// Output after approximately 2 seconds:
// Using .then(): { id: 101, name: 'Utkarsh' }
// Using async/await: { id: 101, name: 'Utkarsh' }
