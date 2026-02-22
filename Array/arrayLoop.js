//forEach(callback) → executes a function for every element (doesn’t return a new array).
const arr = [1, 2, 3, 5, 9, 4,8]
let newArr =[]
arr.forEach(element => {
    if (element % 2 === 0){
        newArr.push(element)
    }
});
console.log(newArr)


//creates a new array with transformed elements.
let numbers =[1,3,4,5]
let double = numbers.map(num => num*2);
console.log(double)



const arr1= [1, 2, 3, 5, 9, 4,8]
const n =arr1.forEach(num=>{
    if (num>8){
        console.log('true')
    }
})

for(i=0; i<arr1.length; i++){
   if(arr1[i] > 8){
    console.log("true")
   }
}

console.log(arr1.length)
const modiArr = arr1.filter(num => num%2===0);
console.log(modiArr)




