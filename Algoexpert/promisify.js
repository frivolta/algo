function promisify(callback) {
    return (...args) => new Promise((resolve, reject)=>{
        try{
            const res = callback(...args)
            resolve(res)
        }catch (e) {
            reject(e)
        }
    })
}


function adder(x,y, handleErrorAndValue){
    const value = x+y;
    if(typeof value!=="number"){
        const error = new Error("Not a number")
        handleErrorAndValue(error, null)
    }else{
        handleErrorAndValue(null, value)
    }
}

const promisified = promisify(adder)
void promisified("15", 5, (err, res)=>{
    if(res){
        console.log("got res", res)
    }else{
        console.log("got err", err)
    }
})