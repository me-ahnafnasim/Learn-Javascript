

## ✅ 1. **`for...in` Loop**  
Loops over **all enumerable properties** (including inherited ones — but usually filtered).

```js
const obj = { a: 1, b: 2 };
Object.prototype.inherited = 'oops'; // ⚠️ Don't do this in real code!

for (const key in obj) {
  console.log(key, obj[key]);
}
// Output:
// a 1
// b 2
// inherited 'oops' ← from prototype!
```

### 🔒 Safe version (check own properties only):
```js
for (const key in obj) {
  if (Object.hasOwn(obj, key)) {
    console.log(key, obj[key]);
  }
}
// Only logs: a 1, b 2
```

> ✅ **Most common way** to loop over object keys.  
> ⚠️ Always pair with `Object.hasOwn()` (or legacy `hasOwnProperty`) to avoid inherited properties.

---

## ✅ 2. **`Object.keys()` + `forEach()` or `for...of`**  
Get **own enumerable string keys**, then loop.

```js
const user = { name: 'Alice', age: 30 };

// Using forEach
Object.keys(user).forEach(key => {
  console.log(key, user[key]);
});

// Using for...of
for (const key of Object.keys(user)) {
  console.log(key, user[key]);
}
// Both output:
// name Alice
// age 30
```

> ✅ Clean, functional style.  
> ✅ Only includes **own, enumerable, string-keyed** properties (symbols excluded).

---

## ✅ 3. **`Object.values()` – Loop Over Values Only**

```js
const scores = { math: 90, science: 85 };
Object.values(scores).forEach(value => {
  console.log(value);
});
// 90
// 85
```

> ✅ Use when you **don’t need keys**, just values.

---

## ✅ 4. **`Object.entries()` – Loop Over `[key, value]` Pairs**  
Most powerful and modern approach.

```js
const person = { city: 'Paris', country: 'France' };

// Using for...of
for (const [key, value] of Object.entries(person)) {
  console.log(`${key}: ${value}`);
}

// Using forEach
Object.entries(person).forEach(([key, value]) => {
  console.log(key, value);
});
// Output:
// city Paris
// country France
```

> ✅ Preferred method in modern JS (ES2017+).  
> ✅ Destructuring makes it clean and readable.

---

## ✅ 5. **`Reflect.ownKeys()` – Get All Own Keys (Including Symbols & Non-enumerable)**

```js
const obj = { a: 1 };
Object.defineProperty(obj, 'hidden', { value: 2, enumerable: false });
const sym = Symbol('id');
obj[sym] = 100;

console.log(Reflect.ownKeys(obj));
// ['a', 'hidden', Symbol(id)]
```

Then loop:
```js
Reflect.ownKeys(obj).forEach(key => {
  console.log(key, obj[key]);
});
```

> 🔹 Includes:
> - String keys (enumerable + non-enumerable)
> - Symbol keys (enumerable + non-enumerable)
> - But **not inherited** properties

> ✅ Use when you need **complete introspection** (e.g., deep cloning, debugging).

---

## ✅ 6. **`Object.getOwnPropertyNames()` + `Object.getOwnPropertySymbols()`**

Split approach to get all own properties:

```js
const obj = { x: 1 };
Object.defineProperty(obj, 'y', { value: 2, enumerable: false });
const s = Symbol('s');
obj[s] = 3;

const strKeys = Object.getOwnPropertyNames(obj);     // ['x', 'y']
const symKeys = Object.getOwnPropertySymbols(obj);   // [Symbol(s)]

[...strKeys, ...symKeys].forEach(key => {
  console.log(key, obj[key]);
});
```

> 🔸 `getOwnPropertyNames` → all **string** keys (even non-enumerable)  
> 🔸 `getOwnPropertySymbols` → all **symbol** keys

> 🧩 Useful in libraries or advanced meta-programming.

---

## ❌ What **Does NOT Work**?

### 🚫 `for...of` directly on object
```js
const obj = { a: 1 };
for (const item of obj) { } // TypeError: obj is not iterable
```

> Plain objects are **not iterable** by default.  
> To make one iterable, you’d need to define a `[Symbol.iterator]` method.

### 🚫 `forEach` directly on object
```js
obj.forEach(...) // ❌ TypeError: obj.forEach is not a function
```

> Objects don’t have array methods.

---

## 🧠 Summary Table

| Method | Includes Inherited? | Includes Non-enumerable? | Includes Symbols? | Returns |
|-------|---------------------|--------------------------|-------------------|--------|
| `for...in` | ✅ Yes | ❌ No | ❌ No | Keys (strings only) |
| `Object.keys()` | ❌ No | ❌ No | ❌ No | Own enumerable string keys |
| `Object.values()` | ❌ No | ❌ No | ❌ No | Own enumerable values |
| `Object.entries()` | ❌ No | ❌ No | ❌ No | `[key, value]` pairs |
| `Reflect.ownKeys()` | ❌ No | ✅ Yes | ✅ Yes | All own keys (strings + symbols) |
| `Object.getOwnPropertyNames()` | ❌ No | ✅ Yes | ❌ No | Own string keys |
| `Object.getOwnPropertySymbols()` | ❌ No | ✅ Yes | ✅ Yes | Own symbol keys |

---

## 💡 Best Practices

1. **For everyday use**:  
   → Use `Object.entries(obj)` with `for...of` or `.forEach()`

2. **Need safety from prototypes?**  
   → Always use `Object.hasOwn()` with `for...in`, or prefer `Object.keys/entries`

3. **Working with symbols or hidden props?**  
   → Use `Reflect.ownKeys()` or split `getOwnProperty*` methods

4. **Avoid**:  
   → `for...in` without `hasOwn`  
   → Assuming objects are iterable

---

## 🎯 Example: Real-World Use Case

```js
// Validate required fields in a form object
const formData = { email: 'test@example.com', password: '' };
const requiredFields = ['email', 'password'];

const missing = requiredFields.filter(field => {
  const value = formData[field];
  return value === null || value === undefined || value === '';
});

if (missing.length > 0) {
  console.log('Missing:', missing); // ['password']
}
```

Here, we’re **not looping the object**, but often you’ll combine object looping with array methods for validation, mapping, etc.

---

