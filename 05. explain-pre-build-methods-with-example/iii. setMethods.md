

# 🟢 What is a Set?

A **Set** is a collection of **unique values**.

```js
const mySet = new Set();
```

✔ No duplicate values
✔ Keeps insertion order
✔ Can store any data type

---




# 🔹 1️⃣ `add(value)`

Adds a new value.

```js
const set = new Set();

set.add(10);
set.add(20);
set.add(10); // duplicate ignored

console.log(set);
// Set { 10, 20 }
```

---

# 🔹 2️⃣ `delete(value)`

Removes a value.

```js
set.delete(10);

console.log(set);
// Set { 20 }
```

Returns `true` if deleted, `false` if not found.

---

# 🔹 3️⃣ `has(value)`

Checks if value exists.

```js
console.log(set.has(20)); // true
console.log(set.has(100)); // false
```

Very fast lookup ⚡

---

# 🔹 4️⃣ `clear()`

Removes all values.

```js
set.clear();

console.log(set);
// Set {}
```

---

# 🔹 5️⃣ `size` (Property, not method)

Returns number of elements.

```js
const numbers = new Set([1, 2, 3]);

console.log(numbers.size); // 3
```

---

# 🔹 6️⃣ `forEach()`

Loops through Set.

```js
numbers.forEach(value => {
  console.log(value);
});
```

---

# 🔹 7️⃣ `values()`

Returns iterator of values.

```js
const iterator = numbers.values();

console.log(iterator.next()); 
```

Usually used with `for...of`:

```js
for (const value of numbers.values()) {
  console.log(value);
}
```

---

# 🔹 8️⃣ `keys()`

In Set, `keys()` is same as `values()`.

```js
console.log(numbers.keys());
```

Because Set has no keys, only values.

---

# 🔹 9️⃣ `entries()`

Returns `[value, value]` pairs.

```js
for (const entry of numbers.entries()) {
  console.log(entry);
}
// [1,1], [2,2], [3,3]
```

Why? Because Set has no key-value structure.

---

# 🔹 🔟 `[Symbol.iterator]`

Set is iterable by default.

```js
for (const value of numbers) {
  console.log(value);
}
```

This works because of built-in iterator.

---


# 🎯 All Set Methods Summary

| Method      | What It Does         |
| ----------- | -------------------- |
| `add()`     | Add value            |
| `delete()`  | Remove value         |
| `has()`     | Check existence      |
| `clear()`   | Remove all           |
| `size`      | Count elements       |
| `forEach()` | Loop                 |
| `values()`  | Iterator             |
| `keys()`    | Same as values       |
| `entries()` | [value, value] pairs |

---

