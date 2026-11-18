### 📌 Programs

### Promise consume karna — `.then`, `.catch`, `.finally`

Promise ka result lene ke liye hum **`.then()`**, **`.catch()`** aur **`.finally()`** lagaate hain.

- **`.then(callback)`** — promise `fulfilled` hone par chalta hai, result deta hai.
- **`.catch(callback)`** — promise `rejected` hone par chalta hai, error deta hai.
- **`.finally(callback)`** — promise settle hone par hamesha chalta hai (chahe success ho ya fail). Cleanup ke liye useful (jaise loading spinner band karna).

### Quick comparison table

| Method | Kab resolve hota hai | Kab reject hota hai |
| --- | --- | --- |
| `Promise.all` | Jab **sab** fulfill | Jab **koi ek** reject |
| `Promise.race` | Jo **pehle settle** ho (success) | Jo **pehle settle** ho (fail) |
| `Promise.allSettled` | **Hamesha** (sabka status) | Kabhi reject nahi |
| `Promise.any` | Jo **pehle fulfill** ho | Jab **saare** reject hon |

### `Promise.all` — sab successful hone chahiye

Multiple promises ka array leta hai. **Jab SAARE fulfill ho jaate hain**, tab ek array of results deta hai. **Agar koi ek bhi reject ho gaya, toh poora `Promise.all` turant reject ho jaata hai.**

### `Promise.race` — jo pehle settle ho

Jo bhi promise **sabse pehle settle (fulfill YA reject)** hota hai, uska result/error de deta hai. Race (daud) jeetne wala. 🏁

### `Promise.allSettled` — sabka result chahiye, fail ho ya pass

Saare promises settle hone ka wait karta hai, aur **sabka status batata hai** — chahe wo fulfilled ho ya rejected. Ye **kabhi reject nahi hota**.

### `Promise.any` — pehla SUCCESS chahiye

Jo bhi promise **sabse pehle FULFILL** ho jaaye, uska result deta hai. Rejections ko ignore karta hai. Agar **saare reject ho jaayein**, tab `AggregateError` deta hai.

**`race` vs `any` ka difference:**

- `race` = jo pehle **settle** ho (chahe fail ho ya pass).
- `any` = jo pehle **fulfill (success)** ho, fails ko ignore karta hai.



---

| S.No. | Program Question | File Name |
| ----: | ------------------------- | --------- |
| 1 | Create a JavaScript Promise using an executor function and demonstrate both fulfilled (`resolve`) and rejected (`reject`) states. | `promiseBasics.js` |
| 2 | Create a function that returns a Promise to simulate asynchronous data fetching using `setTimeout()`, with both success and failure outcomes. | `promiseDataFetch.js` |
| 3 | Handle a Promise using `.then()`, `.catch()`, and `.finally()` to demonstrate success, error handling, and cleanup after asynchronous execution. | `promiseThenCatchFinally.js` |
| 4 | Create a Promise chain using `.then()` to perform multiple asynchronous operations sequentially, passing each resolved result to the next Promise. | `promiseChaining.js` |
| 5 | Solve the Callback Hell (Pyramid of Doom) problem using Promise Chaining. Create a real-world asynchronous order-processing workflow to fetch user details, retrieve orders, get order details, process payment, and send confirmation, with centralized error handling using `.catch()`. | `promiseOrderProcessing.js` |
| 6 | Demonstrate error propagation in Promise chaining by throwing an error inside a `.then()` handler, showing how subsequent `.then()` blocks are skipped and the error is caught by `.catch()`. | `promiseErrorPropagation.js` |
| 7 | Demonstrate `Promise.all()` by executing multiple Promises simultaneously and collecting all resolved results in an array. Handle any rejection using `.catch()`. | `promiseAllSucceed.js` |
| 8 | Demonstrate how `Promise.all()` behaves when one or more Promises reject. Show that the entire Promise rejects immediately when any single Promise fails, and handle the error using `.catch()`. | `promiseAllRejection.js` |
| 9 | Demonstrate `Promise.race()` by running multiple Promises simultaneously and returning the result of whichever Promise settles first, whether fulfilled or rejected. | `promiseRace.js` |
| 10 | Demonstrate `Promise.allSettled()` by executing multiple Promises simultaneously and collecting the outcome of every Promise, including both fulfilled and rejected states, without stopping when one fails. | `promiseAllSettled.js` |
| 11 | Demonstrate `Promise.any()` by executing multiple Promises simultaneously and returning the first successfully fulfilled Promise, ignoring rejected Promises. Handle the case where all Promises reject using `.catch()` and `AggregateError`. | `promiseAny.js` |