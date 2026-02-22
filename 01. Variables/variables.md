In JavaScript, variables can be declared in **three main ways**, using the keywords:

1. **`var`**  
2. **`let`**  
3. **`const`**

Each has different scoping rules, hoisting behavior, and mutability characteristics. Below is a breakdown of their commonalities and differences:

### Basic Differences

| Feature          | `var`         | `let`           | `const`         |
|------------------|---------------|------------------|------------------|
| Scope            | Function      | Block            | Block            |
| Hoisted          | Yes (init)    | Yes (no init)    | Yes (no init)    |
| Re-declare       | ✅            | ❌               | ❌               |
| Re-assign        | ✅            | ✅               | ❌ (binding only)|
| Temporal Dead Zone | ❌         | ✅               | ✅               |

---


```javascript
// Declaring different variables of different data types
let firstName = 'Asabeneh' // first name of a person
let lastName = 'Yetayeh' // last name of a person
let country = 'Finland' // country
let city = 'Helsinki' // capital city
let age = 100 // age in years
let isMarried = true

// Declaring variables with number values
const gravity = 9.81 // earth gravity  in m/s2
const boilingPoint = 100 // water boiling point, temperature in oC
const PI = 3.14 // geometrical constant

// Variables can also be declaring in one line separated by comma
let name = 'Asabeneh', //name of a person
  job = 'teacher',
  live = 'Finland'
```















### Best Practices (Modern JS)
- Prefer **`const`** by default.
- Use **`let`** only when you know the value will change.
- Avoid **`var`** unless maintaining legacy code.

---


### 1. **`var`**
- **Scope**: Function-scoped (or global if outside a function).
- **Hoisting**: Hoisted to the top of its scope and initialized with `undefined`.
- **Re-declaration**: Allowed within the same scope.
- **Re-assignment**: Allowed.
- **Use today**: Generally discouraged in modern JavaScript due to confusing behavior.

```javascript
var x = 10;
var x = 20; // OK: re-declaration allowed
x = 30;     // OK: re-assignment allowed
```

---

### 2. **`let`**
- **Scope**: Block-scoped (`{}`).
- **Hoisting**: Hoisted but **not initialized** (Temporal Dead Zone until declaration).
- **Re-declaration**: **Not allowed** in the same block scope.
- **Re-assignment**: Allowed.
- **Use case**: For variables that may change value.

```javascript
let y = 10;
// let y = 20; // ❌ SyntaxError: re-declaration not allowed
y = 20;        // ✅ OK
```

---

### 3. **`const`**
- **Scope**: Block-scoped.
- **Hoisting**: Hoisted but **not initialized** (Temporal Dead Zone).
- **Re-declaration**: **Not allowed**.
- **Re-assignment**: **Not allowed** for primitive values.  
  ⚠️ However, **object/array contents can be modified** (only the binding is constant).
- **Use case**: For values that should not be reassigned.

```javascript
const z = 10;
// z = 20; // ❌ TypeError: assignment to constant variable

const obj = { a: 1 };
obj.a = 2; // ✅ OK: mutating the object is allowed
// obj = {}; // ❌ Not allowed: re-assignment forbidden
```

---








# Understand Scope in javascript


# 🧱 What is Scope?

**Scope = Where a variable can be used.**

It defines the **area of visibility** of a variable.
---

---

# 🟢 1️⃣ Block Scope (Used by `let` and `const`)

A **block** means anything inside:

```
{  }
```

Example blocks:

* `if { }`
* `for { }`
* `while { }`
* Just `{ }`

---

### ✅ Example of Block Scope

```javascript
if (true) {
  let a = 10;
  console.log(a); // ✅ 10
}

console.log(a); // ❌ Error
```

Why error?

Because `a` was created **inside the block**,
so it cannot be used outside.

👉 `let` and `const` are block scoped.

---

# 🔵 2️⃣ Function Scope (Used by `var`)

Function scope means:

A variable is accessible **anywhere inside the function**,
even outside blocks inside that function.

---

### ✅ Example of Function Scope

```javascript
function test() {
  if (true) {
    var x = 20;
  }

  console.log(x); // ✅ 20
}

test();
```

Why does this work?

Because `var` ignores block scope.
It only cares about the function.

---

# ⚠️ Compare Them Side by Side

### Using `var`

```javascript
function test() {
  if (true) {
    var x = 20;
  }

  console.log(x); // ✅ Works
}
```

---

### Using `let`

```javascript
function test() {
  if (true) {
    let x = 20;
  }

  console.log(x); // ❌ Error
}
```

---

# 🧠 Simple Memory Trick

* `let` and `const` → Respect `{ }`
* `var` → Only respects functions

---

