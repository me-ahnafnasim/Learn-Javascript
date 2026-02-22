# JavaScript Data Structure Methods Reference

## Array Methods

| Method | Description | Returns | Modifies Original? |
|--------|-------------|---------|-------------------|
| `push(element)` | Adds element to end | New length | ✅ |
| `pop()` | Removes last element | Removed element | ✅ |
| `unshift(element)` | Adds element to start | New length | ✅ |
| `shift()` | Removes first element | Removed element | ✅ |
| `concat(array)` | Merges arrays | New array | ❌ |
| `slice(start, end)` | Extracts portion | New array | ❌ |
| `splice(start, count, items)` | Adds/removes elements | Removed elements | ✅ |
| `indexOf(element)` | Finds first index | Index or -1 | ❌ |
| `lastIndexOf(element)` | Finds last index | Index or -1 | ❌ |
| `includes(element)` | Checks if exists | Boolean | ❌ |
| `find(callback)` | Finds first match | Element or undefined | ❌ |
| `findIndex(callback)` | Finds first index | Index or -1 | ❌ |
| `filter(callback)` | Filters elements | New array | ❌ |
| `map(callback)` | Transforms elements | New array | ❌ |
| `reduce(callback, initial)` | Reduces to value | Accumulator | ❌ |
| `forEach(callback)` | Iterates elements | undefined | ❌ |
| `some(callback)` | Checks if any match | Boolean | ❌ |
| `every(callback)` | Checks if all match | Boolean | ❌ |
| `sort(compareFunction)` | Sorts elements | Same array | ✅ |
| `reverse()` | Reverses order | Same array | ✅ |
| `join(separator)` | Joins to string | String | ❌ |
| `toString()` | Converts to string | String | ❌ |
| `flat(depth)` | Flattens nested arrays | New array | ❌ |
| `flatMap(callback)` | Maps then flattens | New array | ❌ |

## Object Methods

| Method | Description | Returns |
|--------|-------------|---------|
| `Object.keys(obj)` | Gets all keys | Array of keys |
| `Object.values(obj)` | Gets all values | Array of values |
| `Object.entries(obj)` | Gets key-value pairs | Array of [key, value] |
| `Object.assign(target, source)` | Copies properties | Target object |
| `Object.freeze(obj)` | Prevents modifications | Frozen object |
| `Object.seal(obj)` | Prevents add/remove | Sealed object |
| `Object.hasOwnProperty(key)` | Checks if property exists | Boolean |
| `Object.getOwnPropertyNames(obj)` | Gets all property names | Array of names |

## Map Methods

| Method | Description | Returns |
|--------|-------------|---------|
| `set(key, value)` | Adds key-value pair | Map object |
| `get(key)` | Gets value by key | Value or undefined |
| `has(key)` | Checks if key exists | Boolean |
| `delete(key)` | Removes key-value pair | Boolean |
| `clear()` | Removes all entries | undefined |
| `size` | Gets number of entries | Number |
| `forEach(callback)` | Iterates entries | undefined |
| `keys()` | Gets all keys | Iterator |
| `values()` | Gets all values | Iterator |
| `entries()` | Gets all entries | Iterator |

## Set Methods

| Method | Description | Returns |
|--------|-------------|---------|
| `add(value)` | Adds value | Set object |
| `has(value)` | Checks if value exists | Boolean |
| `delete(value)` | Removes value | Boolean |
| `clear()` | Removes all values | undefined |
| `size` | Gets number of values | Number |
| `forEach(callback)` | Iterates values | undefined |
| `values()` | Gets all values | Iterator |
| `entries()` | Gets value-value pairs | Iterator |

## String Methods

| Method | Description | Returns |
|--------|-------------|---------|
| `charAt(index)` | Gets character at index | String |
| `charCodeAt(index)` | Gets character code | Number |
| `concat(string)` | Concatenates strings | New string |
| `includes(substring)` | Checks if contains | Boolean |
| `indexOf(substring)` | Finds first occurrence | Index or -1 |
| `lastIndexOf(substring)` | Finds last occurrence | Index or -1 |
| `slice(start, end)` | Extracts substring | New string |
| `substring(start, end)` | Extracts substring | New string |
| `substr(start, length)` | Extracts substring | New string |
| `replace(search, replace)` | Replaces substring | New string |
| `toLowerCase()` | Converts to lowercase | New string |
| `toUpperCase()` | Converts to uppercase | New string |
| `trim()` | Removes whitespace | New string |
| `split(separator)` | Splits into array | Array |
| `repeat(count)` | Repeats string | New string |
| `startsWith(search)` | Checks if starts with | Boolean |
| `endsWith(search)` | Checks if ends with | Boolean |
| `padStart(length, padString)` | Pads start | New string |
| `padEnd(length, padString)` | Pads end | New string |

## WeakMap Methods

| Method | Description | Returns |
|--------|-------------|---------|
| `set(key, value)` | Adds key-value pair | WeakMap |
| `get(key)` | Gets value by key | Value or undefined |
| `has(key)` | Checks if key exists | Boolean |
| `delete(key)` | Removes key-value pair | Boolean |

## WeakSet Methods

| Method | Description | Returns |
|--------|-------------|---------|
| `add(value)` | Adds value | WeakSet |
| `has(value)` | Checks if value exists | Boolean |
| `delete(value)` | Removes value | Boolean |

## Common Utility Methods

| Method | Description | Returns |
|--------|-------------|---------|
| `Array.from(arrayLike)` | Creates from array-like | New array |
| `Array.isArray(value)` | Checks if is array | Boolean |
| `Object.is(value1, value2)` | Strict equality check | Boolean |
| `JSON.stringify(object)` | Converts to JSON string | String |
| `JSON.parse(jsonString)` | Parses JSON string | Object |