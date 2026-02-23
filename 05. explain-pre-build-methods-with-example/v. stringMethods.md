
# 🔹 1️⃣ `length`

👉 Returns the number of characters in the string.

```js
"Hello".length // 5
```

---

# 🔹 2️⃣ `charAt(index)`

👉 Returns the character at a specific position.

```js
"Hello".charAt(1) // "e"
```

---

# 🔹 3️⃣ `at(index)`

👉 Returns character using positive or negative index.

```js
"Hello".at(-1) // "o"
```

---

# 🔹 4️⃣ `toUpperCase()`

👉 Converts all characters to uppercase.

```js
"hello".toUpperCase() // "HELLO"
```

---

# 🔹 5️⃣ `toLowerCase()`

👉 Converts all characters to lowercase.

```js
"HELLO".toLowerCase() // "hello"
```

---

# 🔹 6️⃣ `trim()`

👉 Removes whitespace from both sides.

```js
"  hi  ".trim() // "hi"
```

---

# 🔹 7️⃣ `trimStart()`

👉 Removes whitespace from beginning only.

```js
"  hi".trimStart() // "hi"
```

---

# 🔹 8️⃣ `trimEnd()`

👉 Removes whitespace from end only.

```js
"hi  ".trimEnd() // "hi"
```

---

# 🔹 9️⃣ `includes(search)`

👉 Checks if string contains a value (returns true/false).

```js
"Hello World".includes("World") // true
```

---

# 🔹 🔟 `startsWith(value)`

👉 Checks if string starts with given value.

```js
"Hello".startsWith("He") // true
```

---

# 🔹 1️⃣1️⃣ `endsWith(value)`

👉 Checks if string ends with given value.

```js
"Hello".endsWith("lo") // true
```

---

# 🔹 1️⃣2️⃣ `indexOf(value)`

👉 Returns first index of a value (or -1 if not found).

```js
"Hello".indexOf("l") // 2
```

---

# 🔹 1️⃣3️⃣ `lastIndexOf(value)`

👉 Returns last index of a value.

```js
"Hello".lastIndexOf("l") // 3
```

---

# 🔹 1️⃣4️⃣ `slice(start, end)`

👉 Extracts part of a string.

```js
"Hello".slice(0, 2) // "He"
```

---

# 🔹 1️⃣5️⃣ `substring(start, end)`

👉 Similar to slice but doesn’t accept negative indexes.

```js
"Hello".substring(0, 2) // "He"
```

---

# 🔹 1️⃣6️⃣ `replace(old, new)`

👉 Replaces first occurrence of a value.

```js
"Hello World".replace("World", "JS")
// "Hello JS"
```

---

# 🔹 1️⃣7️⃣ `replaceAll(old, new)`

👉 Replaces all occurrences.

```js
"a a a".replaceAll("a", "x")
// "x x x"
```

---

# 🔹 1️⃣8️⃣ `split(separator)`

👉 Splits string into an array.

```js
"Hello World".split(" ")
// ["Hello", "World"]
```

---

# 🔹 1️⃣9️⃣ `concat()`

👉 Joins strings together.

```js
"Hello".concat(" ", "JS")
// "Hello JS"
```

---

# 🔹 2️⃣0️⃣ `repeat(n)`

👉 Repeats string n times.

```js
"Hi ".repeat(3)
// "Hi Hi Hi "
```

---

# 🔹 2️⃣1️⃣ `padStart(length, char)`

👉 Pads string at beginning.

```js
"5".padStart(3, "0")
// "005"
```

---

# 🔹 2️⃣2️⃣ `padEnd(length, char)`

👉 Pads string at end.

```js
"5".padEnd(3, "0")
// "500"
```

---

# 🔹 2️⃣3️⃣ `charCodeAt(index)`

👉 Returns Unicode of character.

```js
"A".charCodeAt(0)
// 65
```

---

# 🔹 2️⃣4️⃣ `match(regex)`

👉 Returns matched results using regex.

```js
"cat bat".match(/at/g)
// ["at", "at"]
```

---

# 🔹 2️⃣5️⃣ `search(regex)`

👉 Returns index of regex match.

```js
"Hello".search(/lo/)
// 3
```

---

# 🔹 2️⃣6️⃣ `localeCompare(str)`

👉 Compares two strings (used for sorting).

```js
"a".localeCompare("b")
// -1
```



