In **JavaScript**, errors are objects. Most built-in errors inherit from the main `Error` object.


---

# 🧠 1️⃣ Base Error Object

### 🔹 `Error`

The parent of all error types.

```js
try {
  throw new Error("Something went wrong");
} catch (err) {
  console.log(err.name);    // Error
  console.log(err.message); // Something went wrong
}
```

---

# 🚨 2️⃣ Built-in JavaScript Error Types

These are the standard error types you must know.

---

## 1️⃣ `ReferenceError`

Happens when you use a variable that is **not defined**.

```js
try {
  console.log(x);
} catch (err) {
  console.log(err.name); // ReferenceError
}
```

👉 Very common mistake for beginners.

---

## 2️⃣ `TypeError`

Happens when:

* Using a value in the wrong way
* Calling something that is not a function
* Accessing property of `null` or `undefined`

```js
try {
  null.toUpperCase();
} catch (err) {
  console.log(err.name); // TypeError
}
```

---

## 3️⃣ `SyntaxError`

Happens when code has **invalid syntax**.

Example (inside `eval` or `JSON.parse`):

```js
try {
  JSON.parse("{name: 'Ahnaf'}"); // invalid JSON
} catch (err) {
  console.log(err.name); // SyntaxError
}
```

⚠ Important:
Normal syntax errors stop the script before running. They cannot be caught unless inside `eval()`.

---

## 4️⃣ `RangeError`

Happens when a value is **out of allowed range**.

```js
try {
  let arr = new Array(-1);
} catch (err) {
  console.log(err.name); // RangeError
}
```

---

## 5️⃣ `EvalError`

Related to `eval()`. Rarely seen today.

```js
// Historically related to eval misuse
```

Modern JS engines rarely throw this.

---

## 6️⃣ `URIError`

Occurs when `encodeURI()` or `decodeURI()` is used incorrectly.

```js
try {
  decodeURIComponent("%");
} catch (err) {
  console.log(err.name); // URIError
}
```

---

# 🌐 3️⃣ Modern JavaScript Errors (ES6+)

---

## 7️⃣ `AggregateError`

Used when **multiple errors** are grouped together.

Common with `Promise.any()`.

```js
Promise.any([
  Promise.reject("Error 1"),
  Promise.reject("Error 2")
]).catch(err => {
  console.log(err.name); // AggregateError
});
```

---

# ⏳ 4️⃣ Promise / Async Errors

Not separate types, but related to async behavior.

## Unhandled Promise Rejection

```js
Promise.reject("Failed");
```

If not handled with `.catch()`, it causes unhandled rejection error.

---

# 🧱 5️⃣ Custom Errors

You can create your own error types.

```js
class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
  }
}

try {
  throw new ValidationError("Invalid input");
} catch (err) {
  console.log(err.name); // ValidationError
}
```

Very useful in real-world apps.

---

# 📦 6️⃣ Error Object Properties

Every error has:

```js
error.name     // Type of error
error.message  // Error message
error.stack    // Call stack (debugging)
```

---

# 🔥 7️⃣ Summary Table

| Error Type       | When It Happens         |
| ---------------- | ----------------------- |
| `Error`          | Generic error           |
| `ReferenceError` | Variable not defined    |
| `TypeError`      | Wrong type usage        |
| `SyntaxError`    | Invalid syntax          |
| `RangeError`     | Value out of range      |
| `EvalError`      | eval() issue            |
| `URIError`       | URI encoding issue      |
| `AggregateError` | Multiple promise errors |

---

# 🧠 Important Interview Concepts

✔ Most common errors: `ReferenceError`, `TypeError`, `SyntaxError`
✔ Syntax errors usually stop execution before runtime
✔ Errors are objects
✔ You can extend `Error` class

---


