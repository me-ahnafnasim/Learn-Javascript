

## ✅ 1. **`for...of` Loop** *(Most Common & Recommended)*  
Loops directly over the **values** in insertion order.

```js
const colors = new Set(['red', 'green', 'blue']);

for (const color of colors) {
  console.log(color);
}
// Output:
// red
// green
// blue
```

> ✅ Clean, readable, and efficient.  
> ✅ Works with any iterable (including `Map`, `String`, etc.).

---

## ✅ 2. **`forEach()` Method**  
Calls a function for each value in the Set.

```js
const numbers = new Set([10, 20, 30]);

numbers.forEach((value, valueAgain, set) => {
  console.log(value, valueAgain); // value === valueAgain
});
// Output:
// 10 10
// 20 20
// 30 30
```

> 🔹 Signature: `set.forEach((value, value, set) => {})`  
> → The **second parameter is also the value** (not an index like in arrays), for consistency with `Map.forEach`.

> ⚠️ Cannot `break` or `return` early from `forEach`.  
> ✅ Use when performing side effects (e.g., logging, DOM updates).

---

## ✅ 3. **Spread Operator + Array Methods**  
Convert Set to array, then use array looping methods.

```js
const uniqueTags = new Set(['js', 'css', 'html']);

// Using map
[...uniqueTags].map(tag => console.log(tag.toUpperCase()));

// Using filter (though rarely needed since Set is already unique)
const filtered = [...uniqueTags].filter(tag => tag.length > 2);

// Using for...of on spread
for (const tag of [...uniqueTags]) {
  console.log(tag);
}
```

> ✅ Useful when you need array-specific methods (`map`, `filter`, `reduce`, etc.).  
> ⚠️ Creates a temporary array — avoid for very large Sets due to memory overhead.

---

## ✅ 4. **Iterator Methods: `values()`, `keys()`, `entries()`**

### 🔹 `values()` – Returns iterator over values *(default)*
```js
const set = new Set([1, 2, 3]);
const iter = set.values();

console.log(iter.next().value); // 1
console.log(iter.next().value); // 2
// ... or use in for...of
for (const v of set.values()) console.log(v);
```

### 🔹 `keys()` – **Alias for `values()`** (for Map/Set compatibility)
```js
for (const k of set.keys()) {
  console.log(k); // same as values()
}
```

### 🔹 `entries()` – Returns `[value, value]` pairs (like Map)
```js
const fruits = new Set(['apple', 'banana']);
for (const [key, value] of fruits.entries()) {
  console.log(key, value); // 'apple' 'apple', 'banana' 'banana'
}
```

> 💡 Why? To maintain symmetry with `Map`, where `entries()` returns `[key, value]`.

> ✅ Use iterators when you need fine-grained control (e.g., pausing iteration).

---

## ✅ 5. **`while` + Iterator (Manual Control)**  
Advanced: manually consume the iterator.

```js
const set = new Set([100, 200]);
const iter = set[Symbol.iterator]();

let result;
while (!(result = iter.next()).done) {
  console.log(result.value);
}
// 100
// 200
```

> 🧩 Rarely needed, but useful in generator functions or custom logic.

---

## ❌ What **Does NOT Work**?

### 🚫 `for...in`
```js
const s = new Set([1, 2]);
for (const key in s) { /* never runs */ }
```
> `for...in` is for **enumerable object properties**, not iterables.

### 🚫 Direct indexing
```js
const s = new Set(['a', 'b']);
console.log(s[0]); // undefined
```
> Sets are **not indexed** — no numeric access.

### 🚫 Array methods directly
```js
new Set([1,2]).map(x => x * 2); // ❌ TypeError
```
> Convert to array first using `[...set]` or `Array.from(set)`.

---

## 🧠 Summary Table

| Method | Syntax | Can Break? | Returns | Notes |
|-------|--------|-----------|--------|------|
| `for...of` | `for (v of set)` | ✅ Yes | Values | **Best for most cases** |
| `forEach` | `set.forEach(v => ...)` | ❌ No | `undefined` | Functional style, no early exit |
| Spread + array methods | `[...set].map(...)` | ✅ Yes | New array | Enables `map`, `filter`, etc. |
| `values()` / `keys()` | `for (v of set.values())` | ✅ Yes | Iterator | Redundant (same as `for...of`) |
| `entries()` | `for ([v1, v2] of set.entries())` | ✅ Yes | `[v, v]` pairs | For Map-like consistency |
| Manual iterator | `set[Symbol.iterator]()` | ✅ Yes | Iterator object | Full control, rarely needed |

---

## 💡 Pro Tips

1. **Prefer `for...of`** for simple loops — it’s fast, clean, and native.
2. Use `forEach` only if you’re already in a functional style and don’t need to break.
3. Need transformation? Convert to array:
   ```js
   const doubled = [...mySet].map(x => x * 2);
   ```
4. Sets preserve **insertion order**, so loops always follow the order items were added.

---

## 🎯 Real-World Example: Remove Duplicates & Process

```js
const rawData = [1, 2, 2, 3, 1];
const unique = new Set(rawData);

// Process each unique item
for (const id of unique) {
  console.log('Processing ID:', id);
  // e.g., fetch user data, update UI, etc.
}
```

---

