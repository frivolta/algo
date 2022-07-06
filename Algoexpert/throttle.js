function throttle(callback, delay) {
    let timer = null;
    let executed = false;
    let executedTime = null;
    return function (...args){
        if(!executed){
            callback.apply(this, args)
            executed = true;
            executedTime = Date.now()
        }
        timer = setTimeout(()=>{
            if(Date.now()-executedTime>delay) {
                executed = false;
            }
            //timer = null;
            clearTimeout(timer)
            timer=null;
        },delay)
    }
}

console.log('working')
const throttled = throttle(console.log, 1000)
document.addEventListener('keypress', ()=>throttled(Date.now()))
