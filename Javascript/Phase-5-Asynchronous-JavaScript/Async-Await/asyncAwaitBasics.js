function dataLao() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Data aa gaya 📦"), 2000);
  });
}

// async function
async function main() {
  console.log("Start");
  const data = await dataLao(); // yahan ruk ke wait karega
  console.log(data);            // Data aa gaya 📦
  console.log("End");
}

main();

// Start
// (2 sec baad)
// Data aa gaya 📦
// End