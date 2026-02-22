const sourceArray = [5, 2, 3, 4, 1];
const targetArray = [10, 20];

// Iterate and add to beginning
for (let i = 0; i < sourceArray.length; i++) {
  targetArray.unshift(sourceArray[i]);
}
console.log(targetArray);