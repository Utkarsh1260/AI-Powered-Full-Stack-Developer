### 📌 Programs

### JSON kya hai?

**JSON = JavaScript Object Notation.** Ye data ko **text (string)** format me likhne ka ek standard tareeka hai. Servers aur clients ke beech data is format me hi travel karta hai, kyunki network par sirf text hi bhej sakte hain (objects directly nahi).

JSON dikhne me JS object jaisa hai, par kuch rules hain:

- **Keys hamesha double quotes me** honi chahiye: `"name"` (single quote ya bina quote nahi chalega).
- **Strings hamesha double quotes** me.
- Values ho sakti hain: string, number, boolean, null, array, ya doosra object.
- **Functions, `undefined` allowed nahi** hote JSON me.

| S.No. | Program Question | File Name |
| ----: | ------------------------- | --------- |
| 1 | Demonstrate `JSON.stringify()` by converting a JavaScript object containing primitive values and an array into a JSON string. Verify the converted value's data type using `typeof`. | `jsonStringify.js` |
| 2 | Demonstrate formatted JSON output using `JSON.stringify()` with the `space` parameter to add indentation and make a JavaScript object easier to read. | `jsonStringifyPretty.js` |
| 3 | Demonstrate how `JSON.stringify()` handles object properties containing functions and `undefined` values by showing that these properties are omitted from the resulting JSON string. | `jsonStringifyIgnoredValues.js` |
| 4 | Demonstrate `JSON.parse()` by converting a JSON string into a JavaScript object. Access its properties and array elements, and verify the resulting data type using `typeof`. | `jsonParse.js` |
| 5 | Demonstrate a JSON round trip by converting a JavaScript object into a JSON string using `JSON.stringify()` and converting it back into a JavaScript object using `JSON.parse()`. Verify both data types. | `jsonRoundTrip.js` |
| 6 | Demonstrate deep copying of a nested JavaScript object using `JSON.parse(JSON.stringify())`. Verify that modifying the copied nested object does not affect the original, and explore limitations such as functions and `undefined` being removed and `Date` objects being converted into strings. | `jsonDeepCopy.js` |