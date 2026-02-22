

## ✅ 1. **`for...of` Loop** *(Most Common & Recommended)*  
Loops over **entries** (`[key, value]` pairs) by default.

```js
const userRoles = new Map([
  ['Alice', 'admin'],
  ['Bob', 'editor'],
  ['Charlie', 'viewer']
]);

for (const [key, value] of userRoles) {
  console.log(`${key} → ${value}`);
}
// Output:
// Alice → admin
// Bob → editor
// Charlie → viewer
```

> ✅ Clean, readable, and efficient.  
> ✅ Destructuring `[key, value]` makes it intuitive.  
> ✅ Preserves insertion order.

---

## ✅ 2. **`forEach()` Method**  
Calls a function for each entry.

```js
userRoles.forEach((value, key, map) => {
  console.log(key, value);
});
// Same output as above
```

> 🔹 Signature: `map.forEach((value, key, map) => {})`  
> → Note: **value comes first**, then key (unlike `for...of` destructuring).

> ⚠️ Cannot `break` or `return` early.  
> ✅ Great for side effects (logging, DOM updates, etc.).

---

## ✅ 3. **Iterator Methods: `keys()`, `values()`, `entries()`**

### 🔹 `entries()` – Default iterator (same as `for...of`)
```js
for (const [k, v] of userRoles.entries()) {
  console.log(k, v);
}
```

### 🔹 `keys()` – Iterate over keys only
```js
for (const name of userRoles.keys()) {
  console.log('User:', name);
}
// User: Alice
// User: Bob
// User: Charlie
```

### 🔹 `values()` – Iterate over values only
```js
for (const role of userRoles.values()) {
  console.log('Role:', role);
}
// Role: admin
// Role: editor
// Role: viewer
```

> 💡 All return **iterators**, so they work with `for...of`, spread (`...`), or manual `.next()`.

---

## ✅ 4. **Spread Operator + Array Methods**  
Convert Map parts to arrays for advanced processing.

```js
// Convert to array of [key, value] pairs
const entriesArr = [...userRoles]; // same as [...userRoles.entries()]

// Get keys as array
const names = [...userRoles.keys()]; // ['Alice', 'Bob', 'Charlie']

// Get values as array
const roles = [...userRoles.values()]; // ['admin', 'editor', 'viewer']

// Transform values
const upperRoles = [...userRoles].map(([k, v]) => [k, v.toUpperCase()]);
console.log(new Map(upperRoles));
// Map(3) { 'Alice' => 'ADMIN', 'Bob' => 'EDITOR', ... }
```

> ✅ Enables use of `map`, `filter`, `reduce`, etc.  
> ⚠️ Creates temporary arrays — avoid for very large Maps.

---

## ✅ 5. **Manual Iterator (Advanced Control)**

```js
const iter = userRoles[Symbol.iterator](); // or userRoles.entries()

let result;
while (!(result = iter.next()).done) {
  const [key, value] = result.value;
  console.log(key, value);
}
```

> 🧩 Useful in generators, custom async iteration, or pausing logic.

---

## ❌ What **Does NOT Work**?

### 🚫 `for...in`
```js
for (const prop in userRoles) { /* never runs */ }
```
> `for...in` only works on **enumerable object properties**, not iterables like `Map`.

### 🚫 Direct property access
```js
userRoles[0] // undefined
userRoles.Alice // undefined
```
> Use `.get('Alice')` instead — **Maps are not plain objects**.

### 🚫 Array methods directly
```js
userRoles.map(...) // ❌ TypeError
```
> Convert to array first using `[...map]` or `Array.from(map)`.

---

## 🧠 Summary Table

| Method | Syntax | Can Break? | Returns | Notes |
|-------|--------|-----------|--------|------|
| `for...of` | `for ([k, v] of map)` | ✅ Yes | Entries | **Best for most cases** |
| `forEach` | `map.forEach((v, k) => ...)` | ❌ No | `undefined` | Value-first params; no early exit |
| `keys()` | `for (k of map.keys())` | ✅ Yes | Keys iterator | |
| `values()` | `for (v of map.values())` | ✅ Yes | Values iterator | |
| `entries()` | `for ([k,v] of map.entries())` | ✅ Yes | Entries iterator | Same as default `for...of` |
| Spread + array methods | `[...map].map(...)` | ✅ Yes | New array | Enables functional transforms |

---

## 💡 Pro Tips

1. **Prefer `for...of`** for readability and control.
2. Use `forEach` only if you’re in a functional pipeline and don’t need to break.
3. Need to **filter or transform**? Convert to array:
   ```js
   const admins = [...userRoles]
     .filter(([k, v]) => v === 'admin')
     .map(([k]) => k);
   // ['Alice']
   ```
4. **Keys can be objects** — useful for metadata or caching:
   ```js
   const cache = new Map();
   const obj = {};
   cache.set(obj, 'data');
   console.log(cache.get(obj)); // 'data'
   ```

---

## 🎯 Real-World Example: API Response Caching

```js
const apiCache = new Map();

async function fetchUser(id) {
  if (apiCache.has(id)) {
    console.log('From cache');
    return apiCache.get(id);
  }

  const user = await fakeAPI(id);
  apiCache.set(id, user);
  return user;
}

// Later, log all cached users
for (const [id, user] of apiCache) {
  console.log(`Cached: ${id} → ${user.name}`);
}
```

---

