```markdown
# 🧮 JavaScript Number Handling Guide



## 🔍 Checking for `NaN`

JavaScript provides two methods to detect `NaN`, but they behave differently:

### `isNaN()` (Global Function)
- Converts the value to a number first**, then checks if it’s NaN.
- Can give misleading results due to type coercion.


console.log(isNaN('100')); // false — '100' converts to 100 → not NaN


### `Number.isNaN()` (ES6+)
- **Strict check**: Only returns `true` if the value is *exactly* `NaN` — **no type conversion**.
- Recommended for reliable `NaN` detection.

```js
console.log(!Number.isNaN(100)); // true — 100 is NOT NaN
```

> ✅ **Best Practice**: Prefer `Number.isNaN()` to avoid unexpected coercion.

---

## 🧪 Checking Number Properties

### `Number.isInteger(value)`
Checks if a value is an integer (whole number).

```js
console.log(Number.isInteger(10.4)); // false
console.log(Number.isInteger(5.0));  // true — 5.0 is considered integer
```

### `Number.isFinite(value)`
Checks if a value is a **finite number** (not `Infinity`, `-Infinity`, or `NaN`).

```js
console.log(Number.isFinite(Infinity)); // false
console.log(Number.isFinite(42));      // true
console.log(Number.isFinite(NaN));     // false
```

> 💡 `Number.isFinite()` is often sufficient to validate if a value is a “normal” number.

---

## 📥 Parsing Strings to Numbers

### `Number.parseFloat(string)`
Parses the beginning of a string and returns the first valid floating-point number.

```js
console.log(Number.parseFloat('3.14em')); // 3.14 — ignores trailing non-numeric chars
```

### `parseInt(string, [radix])`
Parses a string and returns an integer. Optional `radix` (base) parameter (e.g., 10 for decimal).

```js
let n = parseInt('100');
console.log(typeof n); // "number"
```

> ⚠️ Always specify the radix (e.g., `parseInt('100', 10)`) to avoid octal/hex surprises.

---

## 🔄 Converting Numbers to Strings

Several ways to convert a number to a string:

### 1. `.toString()`
```js
let num = 123;
let str = num.toString();
console.log(str);        // "123"
console.log(typeof str); // "string"
```

### 2. `String()` Constructor
```js
let num = 456;
let str = String(num);
console.log(str); // "456"
```

### 3. Template Literals (Backticks)
```js
let num = 789;
let str = `${num}`;
console.log(str); // "789"
```

### 4. String Concatenation
```js
let num = 1000;
let str = num + "";
console.log(str); // "1000"
```

> ✅ All methods are valid — choose based on style or context.

---

## ⚠️ Floating-Point Precision Quirk

JavaScript uses IEEE 754 floating-point arithmetic, which can lead to unexpected results:

```js
let result = 0.1 + 0.2;
console.log(result); // 0.30000000000000004 — not 0.3!
```

> 🛠️ Use libraries like `decimal.js` or round results for financial calculations.

---

## ✅ Robust Number Validation

### Verbose Check (Type + Finite + Not NaN)
```js
function isNumberValid(n) {
    return typeof n === 'number' && !Number.isNaN(n) && Number.isFinite(n);
}

console.log(isNumberValid(42));        // true
console.log(isNumberValid('42'));      // false — string
console.log(isNumberValid(NaN));       // false
console.log(isNumberValid(Infinity));  // false
```

### ✨ Concise Check (Recommended)
```js
function isNumberValid(n) {
    return Number.isFinite(n);
}

// Same results as above — simpler and safer!
```

> ✅ `Number.isFinite(n)` is the most reliable and concise way to validate numbers in JS.

---

## 📌 Summary Cheat Sheet

| Task                          | Method / Function              | Example                     |
|-------------------------------|--------------------------------|-----------------------------|
| Check for `NaN` (strict)      | `Number.isNaN()`               | `Number.isNaN(NaN) → true`  |
| Check for `NaN` (coerced)     | `isNaN()`                      | `isNaN('hello') → true`     |
| Check if integer              | `Number.isInteger()`           | `Number.isInteger(5.0) → true` |
| Check if finite number        | `Number.isFinite()`            | `Number.isFinite(42) → true` |
| Parse float from string       | `Number.parseFloat()`          | `parseFloat('3.14px') → 3.14` |
| Parse integer from string     | `parseInt(str, 10)`            | `parseInt('100', 10) → 100` |
| Number → String               | `num.toString()`, `String(num)`, `${num}`, `num + ""` | All valid |
| Validate number               | `Number.isFinite(value)`       | Best practice ✅            |

---

📚 **Pro Tip**: Always prefer `Number.isFinite()` for number validation — it’s safe, concise, and handles edge cases (`NaN`, `Infinity`) automatically.

Happy coding! 🚀
```