
---

# 🟢 What is Spread Operator?

The **spread operator (`...`)** expands (spreads out) elements of:

* Arrays
* Objects
* Strings
* Iterables

It basically **unpacks values**.

---

# 🔹 1️⃣ Spread with Arrays

## ✅ Copy an Array

👉 Creates shallow copy.

```js
const arr1 = [1, 2, 3];

const arr2 = [...arr1];

console.log(arr2);
// [1, 2, 3]
```

---

## ✅ Merge Arrays

```js
const a = [1, 2];
const b = [3, 4];

const merged = [...a, ...b];

console.log(merged);
// [1, 2, 3, 4]
```

---

## ✅ Add Elements While Copying

```js
const numbers = [2, 3];

const newNumbers = [1, ...numbers, 4];

console.log(newNumbers);
// [1, 2, 3, 4]
```

---

## ✅ Remove Duplicates (Common Trick)

```js
const arr = [1, 2, 2, 3];

const unique = [...new Set(arr)];

console.log(unique);
// [1, 2, 3]
```

🔥 Very common interview pattern.

---

# 🔹 2️⃣ Spread with Objects

---

## ✅ Copy Object

```js
const user1 = { name: "Ahnaf", age: 25 };

const user2 = { ...user1 };

console.log(user2);
```

---

## ✅ Merge Objects

```js
const obj1 = { a: 1 };
const obj2 = { b: 2 };

const merged = { ...obj1, ...obj2 };

console.log(merged);
// { a: 1, b: 2 }
```

---

## ✅ Override Properties

If keys are same, last one wins.

```js
const user = { name: "Ahnaf", age: 25 };

const updatedUser = { ...user, age: 26 };

console.log(updatedUser);
// { name: "Ahnaf", age: 26 }
```

---

# 🔹 3️⃣ Spread with Strings

Strings are iterable.

```js
const str = "Hello";

const letters = [...str];

console.log(letters);
// ["H", "e", "l", "l", "o"]
```

---

# 🔹 4️⃣ Spread in Function Arguments

---

## ✅ Pass Array as Arguments

```js
function add(a, b, c) {
  return a + b + c;
}

const nums = [1, 2, 3];

console.log(add(...nums));
// 6
```

Spread converts array → separate values.

---

# 🔹 5️⃣ Shallow Copy Concept (Important ⚠️)

Spread creates **shallow copy**, not deep copy.

```js
const user = {
  name: "Ahnaf",
  address: { city: "Rome" }
};

const copy = { ...user };

copy.address.city = "Milan";

console.log(user.address.city);
// Milan ❗ (changed!)
```

Because nested object is shared.

---

# 🔥 Spread vs Rest (Very Important)

They look same (`...`) but different meaning.

---

## ✅ Spread (Expands)

```js
const arr = [1, 2, 3];
console.log(...arr);
// 1 2 3
```

---

## ✅ Rest (Collects)

```js
function sum(...numbers) {
  return numbers;
}

console.log(sum(1, 2, 3));
// [1, 2, 3]
```

👉 Spread = unpack
👉 Rest = pack

---

# 🧠 When to Use Spread

✔ Copy array/object
✔ Merge objects
✔ Update state (React)
✔ Pass array to function
✔ Remove duplicates

---

# 🎯 Real World Example

Updating object safely:

```js
const state = {
  name: "Ahnaf",
  age: 25
};

const newState = {
  ...state,
  age: 26
};
```



---

# 🚀 Summary

| Usage              | Example        |
| ------------------ | -------------- |
| Copy Array         | `[...arr]`     |
| Merge Arrays       | `[...a, ...b]` |
| Copy Object        | `{...obj}`     |
| Merge Objects      | `{...a, ...b}` |
| Function Arguments | `fn(...arr)`   |

---
