// 1. Convert string to array

let str = 'im from dhaka, bangladesh'
// methods 1. split() method (just split the string into an array of words or by space)
const arr = str.split(' ')
console.log(arr)

let str1 = 'bangladesh'
// split the string into an array of characters
const arr2 = str1.split('')
console.log(arr2)


// method 2. Array.from() method (creates a new array from an iterable object)
let str2 = 'bangladesh'
const arr3 = Array.from(str2)
console.log(arr3)


// method 3. Spread Operator (...) (a concise ES6 way to turn a string into an array of individual characters)
let str3 = 'bangladesh'
const arr4 = [...str3]
console.log(arr4)







// 2. Convert array to string

//method 1. join() method (joins all elements of an array into a string, with an optional separator)
const arr5 = ['b', 'a', 'n', 'g', 'l', 'a', 'd', 'e', 's', 'h'] 
const str4 = arr5.join('')
console.log(str4)
const str5 = arr5.join(' ')
console.log(str5)
const str6 = arr5.join('-')
console.log(str6)


// method 2. toString(): A built-in method that converts an array to a comma-separated string.
const arr6 = ['b', 'a', 'n', 'g', 'l', 'a', 'd', 'e', 's', 'h'] 
const str7 = arr6.toString()
console.log(str7)


// methods 3. json.stringify() method (converts a JavaScript object or array into a JSON string)
arr7 = ['b', 'a', 'n', 'g', 'l', 'a', 'd', 'e', 's', 'h']
const str8 = JSON.stringify(arr7)
console.log(str8)
console.log(typeof str8)


