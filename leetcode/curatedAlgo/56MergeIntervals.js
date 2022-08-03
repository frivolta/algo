const merge= function (intervals) {
    if (intervals.length === 0) return [];
    intervals.sort((a, b) => a[0] - b[0]);
    let stack = [intervals[0]]
    let result = []
    for(let i=1; i<intervals.length; i++) {
        const current = intervals[i]
        const stacked = stack.pop()
        if(stacked[1]>=current[0]){
            stack.push([Math.min(current[0], stacked[0]), Math.max(current[1], stacked[1])])
        }else{
            result.push(stacked)
            stack.push(current)
        }
    }
    while(stack.length){
        result.push(stack.pop())
    }
    return result
};
//or
var merge = function(intervals) {
    intervals.sort((a, b) => a[0] - b[0])
    const res = [intervals[0]]
    for (let curr of intervals) {
        let prev = res[res.length - 1]
        if (prev[1] >= curr[0]) {
            prev[1] = Math.max(curr[1], prev[1])
        } else {
            res.push(curr)
        }
    }
    return res
};

console.log(merge([[1,3],[2,6],[8,10],[15,18]]))