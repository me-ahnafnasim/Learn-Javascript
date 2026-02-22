//1. 🔄 for...in — Loop Over Enumerable Properties (Keys)
const dict1 = {a: 10,b: 15,c: 7,d: 22,e: 13,f: "hello",g: null};
for (let key in dict1){
    console.log(key, dict[key])
}
  


//2. 📜 Object.keys(obj) + for...of — Own Enumerable String Keys
const dict2 = {a: 10,b: 15,c: 7,d: 22,e: 13,f: "hello",g: null};
for (let key of Object.keys(dict2)){
    console.log(key, dict[key])
}


//3. 📊 Object.values(obj) + for...of — Loop Over Values Only
const dict3 = {a: 10,b: 15,c: 7,d: 22,e: 13,f: "hello",g: null};
for (let value of Object.values(dict3)){
    console.log(value)
}



    const dict4 = {a: 10,b: 15,c: 7,d: 22,e: 13,f: "hello",g: null};
    for (let [key, value] of Object.entries(dict4)){
        console.log(key, value)
    }




function isNumber(x) {
    return typeof x === 'number' && !isNaN(x);

  }
  
  console.log(isNumber(42));        // true
  console.log(isNumber(3.14));      // true
  console.log(isNumber(NaN));       // false ✅
  console.log(isNumber("42"));      // false
  console.log(isNumber(null));      // false
  console.log(isNumber(Infinity));  // true (if you want to allow it)


x = 5;
if (typeof(x) === "number"){
    console.log("x is a number")
}



let x = 9.49;
let y = x.toFixed(5)
console.log(y) 



x = 'nasim'
console.log(typeof x)
if (Number.isFinite(x)) {
    console.log("x is a finite number");
}
else{
    console.log('others')
}



//isNaN() (global) – converts the value to a number first, then checks.

//Number.isNaN() (ES6) – checks only if the value is strictly NaN without conversion.

x = 10
if (!isNaN(x)){
    console.log(x)
}


x = true
if (isNaN(x)){
    console.log(x)
}

console.log(isNaN('nasim'))

//here, isNaN first convert the string/ into number, then if its 
// number return number otherwise anytjing 
x = '300'





arr =[1,5,'nasim', false, undefined, 'wasim', '200']
new_arr =[]
for (let value of arr){
    if (isNaN(value)){
        new_arr.push(value);
    }
}
console.log(new_arr)

console.log(isNaN('100'))
