# JavaScript Data Structure Methods Reference.

| Array Methods | Object Methods | Map Methods | Set Methods | String Methods |
|--------------|---------------|------------|------------|---------------|
| `push(element)` - Add to end | `Object.keys(obj)` - Get keys | `set(key, value)` - Add key-value | `add(value)` - Add value | `charAt(index)` - Get character |
| `pop()` - Remove from end | `Object.values(obj)` - Get values | `get(key)` - Get value by key | `has(value)` - Check if exists | `concat(str)` - Concatenate |
| `unshift(element)` - Add to start | `Object.entries(obj)` - Get entries | `has(key)` - Check if key exists | `delete(value)` - Remove value | `includes(substr)` - Check contains |
| `shift()` - Remove from start | `Object.assign(target, source)` - Copy properties | `delete(key)` - Remove key-value | `clear()` - Remove all | `indexOf(substr)` - Find position |
| `concat(array)` - Merge arrays | `Object.freeze(obj)` - Prevent changes | `clear()` - Remove all | `size` - Get size | `slice(start, end)` - Extract substring |
| `slice(start, end)` - Extract portion | `Object.seal(obj)` - Prevent add/remove | `size` - Get size | `forEach(callback)` - Iterate values | `substring(start, end)` - Extract substring |
| `splice(start, count, items)` - Add/remove | `hasOwnProperty(key)` - Check property | `forEach(callback)` - Iterate entries | `values()` - Get values | `replace(search, replace)` - Replace text |
| `indexOf(element)` - Find index | `Object.getOwnPropertyNames(obj)` - Get property names | `keys()` - Get keys | `entries()` - Get entries | `toLowerCase()` - Convert to lowercase |
| `lastIndexOf(element)` - Find last index | `Object.create(proto)` - Create with prototype | `values()` - Get values | `Array.from(set)` - Convert to array | `toUpperCase()` - Convert to uppercase |
| `includes(element)` - Check if exists | `Object.defineProperty(obj, prop, desc)` - Define property | `entries()` - Get entries |  | `trim()` - Remove whitespace |
| `find(callback)` - Find first match | `Object.is(value1, value2)` - Strict equality |  |  | `split(separator)` - Split into array |
| `findIndex(callback)` - Find first index |  |  |  | `repeat(count)` - Repeat string |
| `filter(callback)` - Filter elements |  |  |  | `startsWith(search)` - Check start |
| `map(callback)` - Transform elements |  |  |  | `endsWith(search)` - Check end |
| `reduce(callback, initial)` - Reduce to value |  |  |  | `padStart(length, padStr)` - Pad start |
| `forEach(callback)` - Iterate elements |  |  |  | `padEnd(length, padStr)` - Pad end |
| `some(callback)` - Check if any match |  |  |  |  |
| `every(callback)` - Check if all match |  |  |  |  |
| `sort(compare)` - Sort elements |  |  |  |  |
| `reverse()` - Reverse order |  |  |  |  |
| `join(separator)` - Join to string |  |  |  |  |
| `toString()` - Convert to string |  |  |  |  |
| `flat(depth)` - Flatten nested |  |  |  |  |
| `flatMap(callback)` - Map and flatten |  |  |  |  |

## Notes:
- **Array Methods**: Most methods that return a new array don't modify the original (marked with ❌), while others do modify (marked with ✅)
- **Object Methods**: Static methods on the Object constructor, not instance methods
- **Map/Set Methods**: Keyed collections with specific methods for key-value management
- **String Methods**: Most return new strings as strings are immutable in JavaScript

This table provides a quick reference for the most commonly used methods across JavaScript's primary data structures.