function debounce(callback, delay, immediate = false) {
    let interval = null
    return (...args)=>{
            clearTimeout(interval)
            interval = setTimeout(() => {
                callback(...args)
            }, delay)
        }
}

// Do not edit the line below.
exports.debounce = debounce;
const debounced = debounce(()=>{console.log("executed")}, 2000)
debounced()
debounced()
debounced()
setTimeout(()=>{
    debounced()
},3000)