### 📌 Programs


### Microtask Queue vs Macrotask Queue
| Basis | Microtask Queue | Macrotask Queue |
|---|---|---|
| 1. Priority | Higher priority | Lower priority |
| 2. Promises | `.then()`, `.catch()`, `.finally()` | Not handled here |
| 3. Timers | Not handled here | `setTimeout()`, `setInterval()` |
| 4. Execution | Drained before the next macrotask | One task is processed at a time |
| 5. Other examples | `await`, `queueMicrotask()` | I/O callbacks, UI events |

### Important Rule

After synchronous code finishes:

1. JavaScript processes all available microtasks.
2. Then the event loop can process the next macrotask.
3. Any new microtasks created during processing are also handled before moving to the next macrotask.

**Execution Order:**

`Synchronous Code → Microtasks → Next Macrotask`


### Event Loop ka kaam kya hai?

**Event Loop** ek watchman ki tarah continuously check karta rehta hai:

> "Kya Call Stack khaali hai? Agar haan, toh pehle saara **Microtask Queue** khaali karo (poora), fir **Callback (Macrotask) Queue** se ek kaam uthao aur stack pe daalo."
>

Steps:

1. Synchronous code pehle poora chalao (Call Stack pe).
2. Stack khaali hone par, **saare microtasks** chalao (poori microtask queue khatam karo).
3. Fir **ek macrotask** uthao.
4. Phir wapas step 2 (microtasks check karo), fir agla macrotask...
5. Ye loop chalta rehta hai. Isiliye naam — **Event Loop**.

#### Sync code → fir saare Microtasks (Promises, await ke baad) → fir Macrotasks (setTimeout). Hamesha isi order me.

| S.No. | Program Question | File Name |
| ----: | ------------------------- | --------- |
| 1 | Demonstrate the JavaScript Event Loop by comparing synchronous code, the Microtask Queue (`Promise.then()`), and the Macrotask Queue (`setTimeout()`). Understand and verify the execution order. | `eventLoopMicroVsMacro.js` |