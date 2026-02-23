
// 1. Remove duplicates from array

const arr = [1, 2, 2, 3, 3, 4];

const unique = [...new Set(arr)];

console.log(unique);
// [1, 2, 3, 4]


