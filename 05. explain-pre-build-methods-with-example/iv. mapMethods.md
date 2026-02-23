
# 🟢 What is a Map?

A **Map** is a collection of **key → value pairs**.

```js
const map = new Map();
```

✔ Keys can be ANY data type (object, function, number, etc.)
✔ Keeps insertion order
✔ Better than object for dynamic key-value storage


---
---

---

# 🔹 1️⃣ `set(key, value)`

Adds or updates a key-value pair.

```js
const user = new Map();

user.set("name", "Ahnaf");
user.set("age", 25);

console.log(user);
// Map(2) { 'name' => 'Ahnaf', 'age' => 25 }
```

### Update value:

```js
user.set("age", 26);
```

---

# 🔹 2️⃣ `get(key)`

Returns value of a key.

```js
console.log(user.get("name")); // Ahnaf
```

If key doesn’t exist → returns `undefined`.

---

# 🔹 3️⃣ `has(key)`

Checks if key exists.

```js
console.log(user.has("age")); // true
console.log(user.has("city")); // false
```

Very fast lookup ⚡

---

# 🔹 4️⃣ `delete(key)`

Removes a key-value pair.

```js
user.delete("age");

console.log(user);
// Map(1) { 'name' => 'Ahnaf' }
```

Returns `true` if deleted.

---

# 🔹 5️⃣ `clear()`

Removes all entries.

```js
user.clear();

console.log(user);
// Map(0) {}
```

---

# 🔹 6️⃣ `size` (Property)

Returns number of entries.

```js
const m = new Map([
  ["a", 1],
  ["b", 2]
]);

console.log(m.size); // 2
```

---

# 🔹 7️⃣ `forEach()`

Loops over Map.

```js
m.forEach((value, key) => {
  console.log(key, value);
});
```

⚠ Order is `(value, key)` — not `(key, value)`

---

# 🔹 8️⃣ `keys()`

Returns iterator of keys.

```js
for (const key of m.keys()) {
  console.log(key);
}
```

---

# 🔹 9️⃣ `values()`

Returns iterator of values.

```js
for (const value of m.values()) {
  console.log(value);
}
```

---

# 🔹 🔟 `entries()`

Returns `[key, value]` pairs.

```js
for (const [key, value] of m.entries()) {
  console.log(key, value);
}
```

---

# 🔹 1️⃣1️⃣ Default Iterator (`for...of`)

Map is iterable directly:

```js
for (const [key, value] of m) {
  console.log(key, value);
}
```

Same as `.entries()`.

---








---

# 🧠 Map vs Object

| Feature                           | Map      | Object          |
| --------------------------------- | -------- | --------------- |
| Key type                          | Any type | String / Symbol |
| Ordered                           | ✅ Yes    | Mostly          |
| Has size property                 | ✅ Yes    | ❌ No            |
| Better performance for large data | ✅ Yes    | ❌               |
| Built for key-value storage       | ✅        | ⚠ Not fully     |

---

# 🎯 All Map Methods Summary

| Method              | Purpose            |
| ------------------- | ------------------ |
| `set()`             | Add / Update       |
| `get()`             | Get value          |
| `has()`             | Check key          |
| `delete()`          | Remove key         |
| `clear()`           | Remove all         |
| `size`              | Count entries      |
| `forEach()`         | Loop               |
| `keys()`            | Get keys           |
| `values()`          | Get values         |
| `entries()`         | Get [key, value]   |
| `[Symbol.iterator]` | Makes Map iterable |

---


