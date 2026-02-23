function divide(a, b) {
  try {
    // 1. TRY: Do the math
    console.log(`Calculating ${a} / ${b}...`);
    
    if (b === 0) {
      throw new Error("Cannot divide by zero!");
    }
    
    return a / b;

  } catch (error) {
    // 2. CATCH: Only runs if b was 0
    console.log("⚠️ Error caught: " + error.message);
    return 0; // Give a safe default answer

  } finally {
    // 3. FINALLY: Runs EVERY time
    console.log("✅ Calculation attempt finished.\n");
  }
}

// --- Test 1: Normal Math ---
divide(10, 2); 

// --- Test 2: The Error ---
divide(10, 0); 



function divide2(a, b){
    try{
        if (b==0){
        throw new Error("cant divided by zero")
    }
    return a/b
}catch(error){
    return ('an error is found: '+ error.message)
}   
}

console.log(divide2(10,0))
console.log(divide2(10,2))


const name  =(nam)=>{
    console.log(nam) 
}