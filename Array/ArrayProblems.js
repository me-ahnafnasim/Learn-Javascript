//basic
const arr =[1,2,4,6]

//unshift() add a element at the beginning of the array
let ar = arr.unshift(10)
console.log(arr)

//shift remove from beginning
const myA= arr.shift()
console.log(arr)


// remove the last element from an array
const pop = arr.pop()
console.log(arr)

//add a new element at the end of an array
const newArry = arr.push(5)
console.log(arr)





const sourceArray = [5, 2, 3, 4, 1];
const targetArray = [10, 20];

// Iterate and add to beginning
for (let i = 0; i < sourceArray.length; i++) {
  targetArray.unshift(sourceArray[i]);
}
console.log(targetArray); // [5, 4, 3, 2, 1, 10, 20]



//get the sum of an array by using the reduce
let array =[5,2,7]
const sum = array.reduce((acc, curr)=>{
return acc + curr
}, 2)
console.log(sum)

// count the frequency of a array 

function getFrequency(arr) {
  const frequency = {};
  
  for (const item of arr) {
      frequency[item] = (frequency[item] || 0) + 1;
  }
  
  return frequency;
}
console.log('nasim' || 0)
// Example usage
const numbers = [1, 2, 3, 2, 1, 3, 3, 4, 1];
console.log(getFrequency(numbers));
// Output: { '1': 3, '2': 2, '3': 3, '4': 1 }
