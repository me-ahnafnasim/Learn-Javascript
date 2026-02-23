
---

## 1. What Is Destructuring?

Destructuring lets you unpack values from arrays or properties from objects directly into variables.

### Array Destructuring
```javascript
const [a, b] = [1, 2];
console.log(a); // 1
console.log(b); // 2
```

### Object Destructuring
```javascript
const { name, age } = { name: 'Alice', age: 25 };
console.log(name); // 'Alice'
console.log(age);  // 25
```

---

## 2. Common Use Cases

### ✅ Extracting Multiple Return Values
```javascript
function getUser() {
  return ['John', 30, 'john@example.com'];
}

const [name, age, email] = getUser();
```

### ✅ Swapping Variables
```javascript
let x = 1, y = 2;
[x, y] = [y, x];
console.log(x, y); // 2, 1
```

### ✅ Function Parameters
```javascript
function greet({ name, age }) {
  console.log(`Hello ${name}, you are ${age}`);
}

greet({ name: 'Bob', age: 28 });
```

### ✅ Default Values
```javascript
const { name = 'Guest', role = 'user' } = {};
console.log(name); // 'Guest'
```

### ✅ Skipping Elements (Arrays)
```javascript
const [first, , third] = [1, 2, 3];
console.log(first, third); // 1, 3
```

### ✅ Rest and Spread Operators
```javascript
const [head, ...tail] = [1, 2, 3, 4];
console.log(head); // 1
console.log(tail); // [2, 3, 4]

const { id, ...user } = { id: 1, name: 'Eve', email: 'eve@example.com' };
console.log(user); // { name: 'Eve', email: 'eve@example.com' }
```

### ✅ Nested Destructuring
```javascript
const user = {
  profile: {
    name: 'Diana',
    contact: {
      email: 'diana@example.com'
    }
  }
};

const { profile: { name, contact: { email } } } = user;
```

### ✅ Renaming Variables
```javascript
const { name: userName, age: userAge } = { name: 'Frank', age: 35 };
console.log(userName, userAge); // 'Frank', 35
```

### ✅ Destructuring in Loops
```javascript
const users = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 }
];

for (const { name, age } of users) {
  console.log(`${name} is ${age}`);
}
```

### ✅ Destructuring in Event Handlers
```javascript
element.addEventListener('click', ({ clientX, clientY }) => {
  console.log(`Clicked at ${clientX}, ${clientY}`);
});
```

### ✅ Destructuring in Imports
```javascript
import { useState, useEffect } from 'react';
import { default as React } from 'react';
```

---

## 3. Advanced Patterns

### ✅ Function Returning Multiple Values
```javascript
function calculate(a, b) {
  return {
    sum: a + b,
    product: a * b,
    difference: a - b
  };
}

const { sum, product } = calculate(5, 3);
```

### ✅ Destructuring with API Responses
```javascript
async function fetchUser(id) {
  const response = await fetch(`/api/users/${id}`);
  const { data: { name, email } } = await response.json();
  return { name, email };
}
```

### ✅ Configuration Objects
```javascript
function setup({
  width = 800,
  height = 600,
  theme = 'light'
} = {}) {
  console.log(`Width: ${width}, Height: ${height}, Theme: ${theme}`);
}

setup({ width: 1024 });
```

### ✅ Extracting Specific Properties
```javascript
const response = {
  status: 200,
  data: { id: 1, name: 'Product' },
  meta: { page: 1 }
};

const { data: { id, name } } = response;
```

---

## 4. Best Practices

- ✅ Use meaningful variable names
- ✅ Provide default values for optional properties
- ✅ Avoid deeply nested destructuring for readability
- ✅ Use renaming when property names conflict
- ✅ Combine with rest/spread for flexibility

---

## 5. Common Pitfalls

```javascript
// ❌ Incorrect: Using {} instead of ()
const { name } = { name: 'Test' }; // ✅
// const { name } = { name: 'Test' }; // ❌ if used in statement context without var/let/const

// ❌ Undefined property
const { missing } = {}; // missing === undefined

// ✅ Provide default
const { missing = 'default' } = {};
```

---

## 6. Comparison: Before vs After ES6

### Before
```javascript
var user = { name: 'John', age: 30 };
var name = user.name;
var age = user.age;
```

### After
```javascript
const { name, age } = user;
```

---

