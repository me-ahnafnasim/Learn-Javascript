
> 💡 **Note**: Most useful "object methods" in JavaScript are **static methods** on the `Object` constructor. Objects themselves don’t have built-in instance methods like arrays do—instead, you use `Object.*` utilities.

---

## ✅ 1. **Reading / Listing Properties**

### 🔹 `Object.keys(obj)`  
Returns an array of **own enumerable string-keyed property names**.

```js
const user = { name: 'Alice', age: 30 };
console.log(Object.keys(user)); // ['name', 'age']
```

### 🔹 `Object.values(obj)`  
Returns an array of **own enumerable property values**.

```js
console.log(Object.values(user)); // ['Alice', 30]
```

### 🔹 `Object.entries(obj)`  
Returns an array of `[key, value]` pairs.

```js
console.log(Object.entries(user)); // [['name', 'Alice'], ['age', 30]]
```

> ✅ Great for looping:
```js
for (const [key, value] of Object.entries(user)) {
  console.log(`${key}: ${value}`);
}
```

---

## ✅ 2. **Creating / Copying / Merging Objects**

### 🔹 `Object.assign(target, ...sources)`  
Copies **own enumerable properties** from source objects to target (shallow copy/merge).

```js
const defaults = { theme: 'light', lang: 'en' };
const settings = Object.assign({}, defaults, { lang: 'es' });
console.log(settings); // { theme: 'light', lang: 'es' }
```

> ⚠️ **Shallow only** – nested objects are shared by reference.

### 🔹 `{...obj}` (Spread Syntax – not a method, but common)  
Modern alternative for shallow copying or merging:

```js
const copy = { ...user, city: 'Paris' };
// Equivalent to Object.assign({}, user, { city: 'Paris' })
```

### 🔹 `Object.create(proto)`  
Creates a new object with the specified prototype.

```js
const animal = { eats: true };
const rabbit = Object.create(animal);
console.log(rabbit.eats); // true (inherited)
console.log(Object.getPrototypeOf(rabbit) === animal); // true
```

Useful for prototypal inheritance without classes.

---

## ✅ 3. **Property Checks & Safety**

### 🔹 `Object.hasOwn(obj, prop)` *(ES2022)*  
**Safe way** to check if an object has an **own** (not inherited) property. Replaces `hasOwnProperty`.

```js
const obj = { x: 1 };
console.log(Object.hasOwn(obj, 'x'));     // true
console.log(Object.hasOwn(obj, 'toString')); // false (inherited)

// Safer than obj.hasOwnProperty, which can be overridden!
```

> ✅ Preferred over `obj.hasOwnProperty(prop)`.

### 🔹 `Object.is(a, b)`  
Strict equality that handles edge cases like `NaN` and `-0`.

```js
console.log(Object.is(NaN, NaN));   // true (unlike NaN === NaN → false)
console.log(Object.is(-0, +0));    // false
console.log(Object.is(0, 0));      // true
```

---

## ✅ 4. **Controlling Mutability**

### 🔹 `Object.freeze(obj)`  
Prevents adding, removing, or changing **own properties** (shallow freeze).

```js
const config = { debug: true };
Object.freeze(config);
config.debug = false; // silently fails in non-strict mode
console.log(config.debug); // true

// Note: Nested objects are NOT frozen!
const nested = { user: { name: 'Bob' } };
Object.freeze(nested);
nested.user.name = 'Alice'; // ❌ Still allowed!
```

### 🔹 `Object.seal(obj)`  
Prevents adding/removing properties, but **allows modifying existing values**.

```js
const sealed = { id: 1 };
Object.seal(sealed);
sealed.id = 2;        // ✅ Allowed
sealed.newProp = 3;   // ❌ Not allowed (fails silently or throws in strict mode)
delete sealed.id;     // ❌ Not allowed
```

### 🔹 `Object.preventExtensions(obj)`  
Only prevents **adding new properties**; existing ones can be changed/deleted.

```js
const obj = { a: 1 };
Object.preventExtensions(obj);
obj.b = 2; // ❌ Won't work
obj.a = 9; // ✅ OK
```

> Order of restrictiveness:  
> `preventExtensions` < `seal` < `freeze`

---

## ✅ 5. **Building Objects from Data**

### 🔹 `Object.fromEntries(iterable)`  
Converts an iterable of `[key, value]` pairs into an object.

```js
const entries = [['name', 'Eve'], ['score', 95]];
const player = Object.fromEntries(entries);
console.log(player); // { name: 'Eve', score: 95 }

// Useful with Map:
const map = new Map([['a', 1], ['b', 2]]);
const objFromMap = Object.fromEntries(map);
```

Also great for reversing `Object.entries()`:

```js
const modified = Object.fromEntries(
  Object.entries(user).map(([k, v]) => [k.toUpperCase(), v])
);
// { NAME: 'Alice', AGE: 30 }
```

---

## ✅ 6. **Direct Property Manipulation (Not Static Methods)**

These are **not** called as `Object.xxx()`, but are essential object operations.

### 🔹 Adding/Updating Properties
```js
obj.key = value;
obj['key'] = value;
Object.defineProperty(obj, 'key', { value, writable: true, enumerable: true });
```

### 🔹 Deleting a Property
```js
delete obj.property; // removes own property
// Returns true if successful or property didn't exist
```

Example:
```js
const car = { brand: 'Toyota', year: 2020 };
delete car.year;
console.log(car); // { brand: 'Toyota' }
```

> ⚠️ `delete` only works on **own properties**, not inherited ones.

---

## ✅ 7. **Other Useful Utilities**

### 🔹 `Object.getOwnPropertyNames(obj)`  
Returns **all own property names**, including non-enumerable ones.

```js
const obj = {};
Object.defineProperty(obj, 'hidden', { value: 42, enumerable: false });
console.log(Object.keys(obj));            // []
console.log(Object.getOwnPropertyNames(obj)); // ['hidden']
```

### 🔹 `Object.getOwnPropertyDescriptors(obj)`  
Returns all own property descriptors.

Useful for deep cloning with correct property attributes:
```js
const clone = Object.defineProperties(
  {}, 
  Object.getOwnPropertyDescriptors(original)
);
```

### 🔹 `Object.getPrototypeOf(obj)` & `Object.setPrototypeOf(obj, proto)`  
Get or set the prototype (though `setPrototypeOf` is discouraged for performance).

```js
const proto = { greet() { return 'Hi!'; } };
const obj = Object.create(proto);
console.log(Object.getPrototypeOf(obj) === proto); // true
```

> Prefer `Object.create()` over `setPrototypeOf`.

---

## 🧠 Summary Table

| Method | Purpose | Mutates? |
|-------|--------|--------|
| `Object.keys/values/entries` | List properties | No |
| `Object.assign` | Merge/copy | Yes (target) |
| `Object.create` | Create with proto | No |
| `Object.hasOwn` | Safe own-prop check | No |
| `Object.is` | Safe equality | No |
| `Object.freeze/seal/preventExtensions` | Restrict changes | Yes |
| `Object.fromEntries` | Build obj from pairs | No |
| `delete obj.prop` | Remove property | Yes |

---

---
---
---
---
---
--- 

# Understand how push, pop, add, insert, remove work in object though its not build in object



👉 First important thing:

> ❗ **Objects DO NOT have `push()`, `pop()`, `add()`, or `insert()` methods.**
> Those are **Array (and Set/Map)** methods.

Let’s understand properly 👇

---

# 🧠 1️⃣ Why Objects Don’t Have push/pop?

An **Array** is ordered (index-based):

```js
const arr = ["a", "b", "c"];
// index:   0    1    2
```

An **Object** is key-based:

```js
const user = {
  name: "Ahnaf",
  age: 25
};
```

There is **no index**, so `push()` makes no sense for objects.

---

# 🔹 2️⃣ How Do We “Add” Data to an Object?

Since object is key-value based, we add properties manually.

---

## ✅ Add / Insert Property

### Method 1 — Dot notation

```js
const user = {};

user.name = "Ahnaf";
user.age = 25;

console.log(user);
// { name: "Ahnaf", age: 25 }
```

---

### Method 2 — Bracket notation

```js
user["city"] = "Rome";
```

Useful when key is dynamic:

```js
const key = "email";
user[key] = "test@gmail.com";
```

---

# 🔹 3️⃣ How to Remove (Like pop)?

Use `delete`:

```js
delete user.age;

console.log(user);
// { name: "Ahnaf", city: "Rome", email: "test@gmail.com" }
```

That’s the “object version” of remove.

---

# 🔹 4️⃣ How to Update Property?

Just assign new value:

```js
user.name = "Nasim";

console.log(user.name);
// Nasim
```

# 🧠 Big Concept Summary

| Structure | Add               | Remove           | Access       |
| --------- | ----------------- | ---------------- | ------------ |
| Object    | `obj.key = value` | `delete obj.key` | `obj.key`    |
| Array     | `push()`          | `pop()`          | `arr[index]` |
| Set       | `add()`           | `delete()`       | `has()`      |
| Map       | `set()`           | `delete()`       | `get()`      |

---

# 🎯 Important Understanding

If you find yourself needing `push()` in an object, it usually means:

👉 You should use an **Array inside the object**

Example:

```js
const user = {
  name: "Ahnaf",
  skills: []
};

user.skills.push("JavaScript");
user.skills.push("Python");

console.log(user);
```










