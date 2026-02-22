// remember: map() is a array method that returns a new array with the result of the callback function.
//Both filter() and map() methods take callback functions as their primary argument.
const arr = [1,2,4,5,9,3,7,8,10]
const newArr = arr.map((num)=>num*2)
console.log(newArr)


//apply map() on the array of objects
const users = [
  { "_id": "68dfa3ab80c1de0a012a07b7", "name": "wasim", "password": "wasim45" },
  { "_id": "68dfffb307478df080440ad8", "name": "tituMIA", "password": "titu123" },
  { "_id": "68e019fb7824c45a2b77d46a", "name": "mohiuddin ", "password": "dhakaBangladwsm" }
];

const names = users.map(user => user._id);
console.log(names);
// Output: ["wasim", "tituMIA", "mohiuddin "]




//apply filter on the array of object
const persons = [
  { id: 1, name: 'John', age: 25, active: true },
  { id: 2, name: 'Jane', age: 30, active: false },
  { id: 3, name: 'Bob', age: 22, active: true }
];
// Filter active users
const activeUsers = persons.filter(user => user.active);
console.log(activeUsers)


const myArr = [1,2,3,5,6,7]
const newAr = myArr.filter((num)=>num%2===0)
console.log(newAr)



/* find()
Purpose: Returns the first element that satisfies the condition.
Returns: The element itself (not an array).
If no element is found, it returns undefined. */
const numbers = [1, 2, 3, 4, 5];
const firstEven = numbers.find(num => num % 2 === 0);
console.log(firstEven); // 2
