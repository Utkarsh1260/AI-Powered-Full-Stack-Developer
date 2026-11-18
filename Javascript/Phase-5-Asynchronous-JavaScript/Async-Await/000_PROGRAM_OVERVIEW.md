### 📌 Programs

## 4. async / await ✨

`async`/`await` Promises ke upar ek **syntactic sugar** hai. Ye async code ko bilkul **synchronous jaisa dikhata** hai — padhne aur likhne me sabse aasaan. Andar Promises hi chal rahe hote hain.

### Syntax aur Rules

**Rule 1:** `await` ka use karne ke liye function ko `async` banana zaroori hai.
**Rule 2:** `async` function **hamesha ek Promise return karta hai**.
**Rule 3:** `await` Promise ke settle hone ka wait karta hai aur uski **resolved value** nikaal ke deta hai.

| S.No. | Program Question | File Name |
| ----: | ------------------------- | --------- |
| 1 | Convert a Promise-based asynchronous function into an `async/await` approach. Use `await` to pause execution until the Promise resolves, demonstrating sequential execution. | `asyncAwaitBasics.js` |
| 2 | Demonstrate two ways to handle the same Promise using `.then()` and `async/await`. Fetch an object asynchronously and display the resolved data using both approaches. | `thenVsAsyncAwait.js` |
| 3 | Handle Promise rejections using `async/await` with `try...catch...finally`. Demonstrate error handling when an asynchronous operation fails and execute cleanup code regardless of success or failure. | `asyncAwaitErrorHandling.js` |