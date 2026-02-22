
### ✅ Updated Table: **Array vs Object vs Map vs Set vs String**

| **Array Methods (ordered list)**                   | **Object Methods (key→value record)**               | **Map Methods (key→value, any key type)** | **Set Methods (unique values)**           | **String Methods (immutable sequence of chars)** |
| -------------------------------------------------- | --------------------------------------------------- | ----------------------------------------- | ----------------------------------------- | ------------------------------------------------ |
| **Add / Remove (Ends & Middle)**                   | **Read / List Keys & Values (S)**                   | **Add / Read / Check / Delete**           | **Add / Check / Remove**                  | **Extract / Slice / Search Substrings**          |
| `push(...items)` (M) — add items to end            | `Object.keys(obj)` (S) — array of own enumerable keys | `set(key, val)` (M) — add or update entry | `add(val)` (M) — add unique value         | `slice(start, end)` (N) — extract substring      |
| `pop()` (M) — remove and return last item          | `Object.values(obj)` (S) — array of own enumerable values | `get(key)` (N) — get value by key         | `has(val)` (N) — check if value exists    | `substring(start, end)` (N) — like `slice`, but no negative indices |
| `unshift(...items)` (M) — add items to start       | `Object.entries(obj)` (S) — array of `[key, value]` pairs | `has(key)` (N) — check if key exists      | `delete(val)` (M) — remove value          | `substr(start, length)` (N) — **deprecated**; avoid |
| `shift()` (M) — remove and return first item       |                                                     | `delete(key)` (M) — remove key-value pair | `clear()` (M) — remove all values         | `charAt(index)` (N) — get char at index          |
| `splice(start, deleteCount, ...items)` (M) — remove/insert at index | **Create / Copy / Merge (S)**                       | `clear()` (M) — remove all entries        | `size` *(property)* — number of values    | `charCodeAt(index)` (N) — UTF-16 code unit       |
| **Copy / Combine / Convert**                       | `Object.assign(target, ...sources)` (S) — shallow copy/merge props | `size` *(property)* — number of entries   | **Loop / Convert**                        | `codePointAt(index)` (N) — Unicode code point     |
| `slice(start, end)` (N) — extract sub-array        | `{...obj}` (N) — shallow copy via spread            | **Iterate / Loop**                        | `forEach((val, val2, set) => {})` (N)     | `indexOf(substr)` (N) — first index of substring |
| `concat(...arrays)` (N) — merge arrays             | `Object.create(proto)` (S) — create obj with given prototype | `forEach((val, key, map) => {})` (N)      | `for (const val of set)` (N)              | `lastIndexOf(substr)` (N) — last index           |
| `join(separator)` (N) — join elements into string  |                                                     | `for (const [key, val] of map)` (N)       | `values()` (N) — iterator over values     | `includes(substr)` (N) — boolean check           |
| `toString()` (N) — convert to comma-separated string| **Property Checks / Control (S)**                   | `keys()` (N) — iterator over keys         | `keys()` (N) — same as `values()`         | `startsWith(prefix)` (N) — boolean                |
|                                                    | `Object.hasOwn(obj, prop)` (S) — check own property | `values()` (N) — iterator over values     | `entries()` (N) — iterator over `[val, val]` | `endsWith(suffix)` (N) — boolean                  |
| **Search / Check Elements**                        | `Object.freeze(obj)` (S) — prevent changes (shallow)| `entries()` (N) — iterator over `[key, val]` | `new Set(iterable)` — create from array   | `search(regexp)` (N) — index of match or -1      |
| `includes(value)` (N) — check if value exists      | `Object.seal(obj)` (S) — prevent adding/removing props |                                           | `[...set]` — convert to array             | `match(regexp)` (N) — array of matches or `null` |
| `indexOf(value)` (N) — first index of value        | `Object.is(a, b)` (S) — strict equality             | **Convert to Array**                      |                                           | `matchAll(regexp)` (N) — iterator of all matches |
| `lastIndexOf(value)` (N) — last index of value     |                                                     | `new Map(iterable)` — create from `[key, val]` pairs |                                           |                                                  |
| `find(fn)` (N) — first element matching predicate  | **Modify Object Directly**                          | `Array.from(map)` — convert to `[key, val]` array |                                           | **Transform / Replace**                          |
| `findIndex(fn)` (N) — index of first match         | `delete obj.key` — remove own property              |                                           |                                           | `replace(searchValue, replaceValue)` (N) — replace first match |
| `some(fn)` (N) — `true` if any element matches     |                                                     |                                           |                                           | `replaceAll(searchValue, replaceValue)` (N) — replace all |
| `every(fn)` (N) — `true` if all elements match     | **Build Object from Data (S)**                      |                                           |                                           | `toLowerCase()` (N)                              |
|                                                    | `Object.fromEntries(iterable)` (S) — create object from `[key, val]` pairs |                                           |                                           | `toUpperCase()` (N)                              |
| **Loop / Transform Elements**                      |                                                     |                                           |                                           | `trim()` (N) — remove whitespace from ends       |
| `forEach(fn)` (N) — execute fn for each element    |                                                     |                                           |                                           | `trimStart()` / `trimLeft()` (N)                 |
| `map(fn)` (N) — transform each → new array         |                                                     |                                           |                                           | `trimEnd()` / `trimRight()` (N)                  |
| `filter(fn)` (N) — keep elements matching predicate|                                                     |                                           |                                           | `padStart(length, padStr)` (N)                   |
| `reduce(fn, init)` (N) — reduce to single value    |                                                     |                                           |                                           | `padEnd(length, padStr)` (N)                     |
| `flat(depth)` (N) — flatten nested arrays          |                                                     |                                           |                                           | `repeat(count)` (N) — repeat string N times      |
| `flatMap(fn)` (N) — map then flatten one level     |                                                     |                                           |                                           |                                                  |
| **Reorder / Modify In Place**                      |                                                     |                                           |                                           | **Split / Join**                                 |
| `sort(compareFn)` (M) — sort elements in place     |                                                     |                                           |                                           | `split(separator, limit)` (N) — split into array |
| `reverse()` (M) — reverse order in place           |                                                     |                                           |                                           |                                                  |
| `fill(value, start, end)` (M) — fill range with value |                                                   |                                           |                                           | **Inspect / Info**                               |
| `copyWithin(target, start, end)` (M) — copy part within array |                                               |                                           |                                           | `length` *(property)* — number of UTF-16 units   |
| **Iterators (for `for..of` etc.)**                 |                                                     |                                           |                                           |                                                  |
| `keys()` (N) — iterator over indices               |                                                     |                                           |                                           |                                                  |
| `values()` (N) — iterator over elements            |                                                     |                                           |                                           |                                                  |
| `entries()` (N) — iterator over `[index, element]` |                                                     |                                           |                                           |                                                  |

---

### 💡 Quick Notes on Strings
- **Immutable**: No method changes the original string.
- **Index-based access**: Like arrays (`str[0]`), but read-only.
- **Unicode-aware**: Use `codePointAt` and `Array.from(str)` for proper Unicode handling (e.g., emojis).
- **Regex support**: Many methods accept regular expressions (`replace`, `match`, `search`, etc.).
- **Template literals**: Not a method, but modern way to build strings: `` `Hello ${name}` ``.

---
