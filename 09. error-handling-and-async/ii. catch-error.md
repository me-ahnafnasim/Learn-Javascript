In **JavaScript**, `try`, `catch`, and `finally` are used for **error handling**. They help your program handle runtime errors without crashing.

---

# 1️⃣ Basic Syntax

```js
try {
  // Code that might cause an error
} catch (error) {
  // Code to handle the error
} finally {
  // Code that always runs
}
```

---

# 2️⃣ How It Works (Step-by-Step)

### ✅ `try`

Put the code that might produce an error inside `try`.

If **no error happens** → `catch` is skipped.
If **error happens** → execution jumps to `catch`.

---

### ✅ `catch`

Handles the error.

It receives an **error object** (usually named `error` or `err`).

```js
catch (error) {
  console.log(error.message);
}
```

Common properties of error:

* `error.name`
* `error.message`
* `error.stack`

---

### ✅ `finally`

This block **always runs**, whether:

* error happens
* no error happens
* even if there is `return`

Useful for:

* closing database connection
* stopping loader
* cleaning resources

---

# 3️⃣ Simple Example

```js
try {
  let result = 10 / 0;
  console.log("Result:", result);
} catch (error) {
  console.log("Something went wrong");
} finally {
  console.log("Finished");
}
```

Output:

```
Result: Infinity
Finished
```

👉 No error occurred (division by zero is not an error in JS), so `catch` is skipped.

---

# 4️⃣ Example With Real Error

```js
try {
  console.log(x); // x is not defined
} catch (error) {
  console.log("Error caught!");
  console.log(error.message);
} finally {
  console.log("Done");
}
```

Output:

```
Error caught!
x is not defined
Done
```

---

# 5️⃣ Manually Throwing Errors

You can create your own errors using `throw`.

```js
function divide(a, b) {
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }
  return a / b;
}

try {
  console.log(divide(10, 0));
} catch (error) {
  console.log(error.message);
}
```

Output:

```
Cannot divide by zero
```

---

# 6️⃣ Error Types in JavaScript

Some built-in errors:

* `ReferenceError`
* `TypeError`
* `SyntaxError`
* `RangeError`

Example:

```js
try {
  null.toUpperCase();
} catch (error) {
  console.log(error.name); // TypeError
}
```

---

# 7️⃣ Important Rules

### 🔹 Rule 1

`finally` runs even if there is `return`

```js
function test() {
  try {
    return "Hello";
  } finally {
    console.log("Finally runs!");
  }
}

console.log(test());
```

Output:

```
Finally runs!
Hello
```

---

### 🔹 Rule 2

You can use `try` without `finally`, or without `catch`.

Valid:

```js
try {
  // code
} catch (error) {}
```

OR

```js
try {
  // code
} finally {}
```

---

# 8️⃣ Real-Life Use Case (Very Important 🚀)

Example: Handling JSON parsing

```js
try {
  const data = JSON.parse('{"name":"Ahnaf"}');
  console.log(data.name);
} catch (error) {
  console.log("Invalid JSON");
}
```

If JSON is invalid → error handled safely.

---

# 9️⃣ Flow Diagram

```
Try block runs
     ↓
If error?
   YES → Catch runs → Finally runs
   NO  → Finally runs
```

---

# 🔟 Interview-Level Understanding

✔ `try` only catches **runtime errors**, not syntax errors outside the block.
✔ Works synchronously (for async you need `async/await` with try/catch).
✔ Best practice: don’t leave `catch` empty.

---


