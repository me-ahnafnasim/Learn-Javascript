

## ✅ 1. **`for` Loop (Classic C-style)**
Most flexible and performant for simple indexed iteration.

```js
const arr = ['a', 'b', 'c'];
for (let i = 0; i < arr.length; i++) {
  console.log(i, arr[i]);
}
// 0 'a'
// 1 'b'
// 2 'c'
```

> ✅ Use when:  
> - You need index control  
> - Performance matters (e.g., large arrays)  
> - You want to `break` or `continue` easily

---

## ✅ 2. **`for...of` Loop (ES6+)**
Iterates over **values** directly. Clean and readable.

```js
const arr = ['x', 'y', 'z'];
for (const value of arr) {
  console.log(value);
}
// 'x'
// 'y'
// 'z'
```

> 🔹 Also works with strings, Maps, Sets, and any iterable.  
> 🔹 No direct access to index (but you can use `entries()` — see below).

To get **index + value**:
```js
for (const [index, value] of arr.entries()) {
  console.log(index, value);
}
```

> ✅ Use when:  
> - You only care about values  
> - You want clean, modern syntax  
> - Working with iterables beyond arrays

---

## ✅ 3. **`forEach()` Method**
Calls a function for each element. **Does not return anything** (`undefined`).

```js
const numbers = [1, 2, 3];
numbers.forEach((value, index, array) => {
  console.log(index, value);
});
// 0 1
// 1 2
// 2 3
```

> ⚠️ **Cannot break or return early** (no `break`, `continue`, or `return` to exit loop).  
> ⚠️ Skips empty slots in sparse arrays.

> ✅ Use when:  
> - Performing side effects (e.g., logging, DOM updates)  
> - Functional style preferred

---

## ✅ 4. **`map()` – Transform Each Element**
Creates a **new array** by applying a function to each element.

```js
const doubled = [1, 2, 3].map(x => x * 2);
console.log(doubled); // [2, 4, 6]
```

> 🔹 Always returns a new array of same length.  
> 🔹 Does **not mutate** original array.

> ✅ Use when:  
> - Transforming data (e.g., formatting, calculations)

---

## ✅ 5. **`filter()` – Select Elements**
Creates a new array with elements that pass a test.

```js
const evens = [1, 2, 3, 4].filter(x => x % 2 === 0);
console.log(evens); // [2, 4]
```

> ✅ Use when:  
> - Filtering data based on condition

---

## ✅ 6. **`reduce()` – Accumulate into Single Value**
Reduces array to a single value (e.g., sum, object, string).

```js
const sum = [1, 2, 3].reduce((acc, val) => acc + val, 0);
console.log(sum); // 6

// Grouping example:
const groups = ['a', 'b', 'a'].reduce((acc, letter) => {
  acc[letter] = (acc[letter] || 0) + 1;
  return acc;
}, {});
console.log(groups); // { a: 2, b: 1 }
```

> ✅ Use when:  
> - Aggregating, grouping, or flattening data

---

## ✅ 7. **`find()` & `findIndex()` – Search**
- `find()`: returns **first matching element**
- `findIndex()`: returns **index** of first match

```js
const users = [{id: 1, name: 'Alice'}, {id: 2, name: 'Bob'}];

const user = users.find(u => u.name === 'Bob');
console.log(user); // {id: 2, name: 'Bob'}

const index = users.findIndex(u => u.id === 1);
console.log(index); // 0
```

> ✅ Use when:  
> - Searching for specific items

---

## ✅ 8. **`some()` & `every()` – Boolean Checks**
- `some()`: `true` if **at least one** passes test
- `every()`: `true` if **all** pass test

```js
const scores = [80, 90, 70];
console.log(scores.some(s => s > 85)); // true
console.log(scores.every(s => s >= 70)); // true
```

> ✅ Use for validation or conditional logic

---

## ✅ 9. **`for...in` – ❌ Avoid for Arrays!**
Loops over **enumerable property names** (including inherited ones). **Not recommended** for arrays.

```js
const arr = ['a', 'b'];
arr.customProp = 'hello';

for (const key in arr) {
  console.log(key, arr[key]);
}
// '0' 'a'
// '1' 'b'
// 'customProp' 'hello' ← unexpected!
```

> 🚫 **Never use `for...in` for arrays** — it’s for **objects**, not ordered lists.

---

## ✅ 10. **`while` and `do...while` Loops**
Less common for arrays, but possible.

```js
let i = 0;
const arr = [10, 20, 30];
while (i < arr.length) {
  console.log(arr[i]);
  i++;
}

// do...while runs at least once
let j = 0;
do {
  console.log(arr[j]);
  j++;
} while (j < arr.length);
```

> ✅ Use only in special cases (e.g., unknown iteration count)

---

## ✅ 11. **Iterators: `keys()`, `values()`, `entries()`**
Arrays are iterable, and provide built-in iterator methods:

```js
const arr = ['red', 'green'];

// Indices
for (const index of arr.keys()) console.log(index); // 0, 1

// Values (same as for...of)
for (const val of arr.values()) console.log(val); // 'red', 'green'

// [index, value] pairs
for (const [i, v] of arr.entries()) console.log(i, v);
```

> 🔹 These return **iterators**, useful with `...` spread or `Array.from()`:
```js
console.log([...arr.keys()]); // [0, 1]
```

---

## 🧠 Quick Decision Guide

| Goal | Best Method |
|------|-------------|
| Simple loop with index | `for` |
| Loop over values only | `for...of` |
| Perform side effects | `forEach` |
| Transform data | `map` |
| Filter data | `filter` |
| Reduce to single value | `reduce` |
| Find first match | `find` / `findIndex` |
| Check conditions | `some` / `every` |
| Need index + value cleanly | `for (const [i, v] of arr.entries())` |

---

## ⚠️ Important Notes
- **All functional methods** (`map`, `filter`, `forEach`, etc.) **skip empty slots** in sparse arrays.
- **None of the functional methods mutate** the original array (except if you explicitly modify objects inside).
- **Performance**: `for` and `for...of` are fastest for large arrays; functional methods have slight overhead but improve readability.

---
