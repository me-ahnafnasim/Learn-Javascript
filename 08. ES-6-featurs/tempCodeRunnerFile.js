    const errhandaling =(name)=>{
        try{
            if (typeof name !== 'string'){
               throw new Error('name must be a string')
               
            }
            return 'hi '+ name
        }catch(err){
            return 'an error is occured: '+ err.message
        }

    }

errhandaling(12345)