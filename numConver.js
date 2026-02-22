//isNaN() (global) – converts the value to a number first, then checks.

//Number.isNaN() (ES6) – checks only if the value is strictly NaN without conversion.

console.log(!Number.isNaN(100))
console.log(isNaN('100'))


//Checks if a value is an integer.
// Number.isInteger(value)	
console.log(Number.isInteger(10.4))	
// Number.isInteger(5.0) // true


//Parses a string and returns a float.
// Number.parseFloat(string)	
console.log(Number.parseFloat('3.14em')) // 3.14


//Checks if a value is a finite number.
Number.isFinite(value)	
Number.isFinite(Infinity) // false



// convert string to number
n = parseInt('100')
console.log(typeof(n))


// convert number to string
/* 
1. toString()
let num = 123;
let str = num.toString();
console.log(str); // "123"
console.log(typeof str); // "string"


2. Using String() constructor
let num = 456;
let str = String(num);
console.log(str); // "456"
 */

/* 3. Using Template Literals (Backticks)

let num = 789;
let str = `${num}`;
console.log(str); // "789"


4. Using String Concatenation

let num = 1000;
let str = num + "";
console.log(str); // "1000" */




let result = 0.1 + 0.2;
console.log(result)

// to check the number better to use (Number.isFinite())
function isNumberValid(n) {
    // Check if it's a number type, finite, and not NaN
    return typeof n === 'number' && !Number.isNaN(n) && Number.isFinite(n);
  }
  isNumberValid(42); // true
  isNumberValid('42'); // false (it's a string)
  isNumberValid(NaN); // false
  isNumberValid(Infinity); // false


  //more concise way to check the number
  function isNumberValid(n) {
//isFinite()
    return Number.isFinite(n);
  }
  
  // Test it:
  console.log(isNumberValid(42));        // true
  console.log(isNumberValid(3.14));      // true
  console.log(isNumberValid(NaN));       // false
  console.log(isNumberValid(Infinity));  // false
  console.log(isNumberValid('42'));      // false



  objectr = { "name": 'mon', "email": 'mon@gmail.com' }
  console.log(typeof(objectr))


  //data goes from cliend js object--> string in the backend--> sring formet e
 const user = { name: "Wasim", email: "wasim@gmail.com" }; // object
  //const user = {"name":"Wasim","email":"wasim@gmail.com"}
  console.log(typeof(user))
  const userJSON = JSON.stringify(user); // convert object to string
  console.log(userJSON)

  const jsObjects = JSON.parse(userJSON) //convert string to object
  console.log(jsObjects)
  
  var person= { name: "Wasim", email: "wasim@gmail.com" }
  var con = JSON.stringify(person)
  console.log(typeof(con), con)

 

// again before the json request hit the route it again convert into js object from string by using below middlwere
app.use(express.json());



  const jsObject = { name: "Alice", age: 30 };
const rawString = JSON.stringify(jsObject); // ← Convert object to JSON string
console.log(rawString); // → '{"name":"Alice","age":30}'