function dataLao() {
  return new Promise((resolve, reject) => {
    console.log("Data laa raha hoon...");

    setTimeout(() => {
      let success = true;

      if (success) {
        resolve({ id: 1, naam: "Aman" });
      } else {
        reject("Server down hai!");
      }
    }, 2000);
  });
}