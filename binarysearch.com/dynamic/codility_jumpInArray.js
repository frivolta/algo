function solution(A) {
    // Intuition: like in a bfs passing on the same element will cause an infinite loop
    const visited = new Set()
    let total = 0
    let idx = 0;
    while (idx >= 0 || idx <= A.length - 1) {
        if(visited.has(idx)){
            return -1
        }
        visited.add(idx)
        total += 1
        if(idx+A[idx]>=A.length) return total
        idx = idx + A[idx]
    }
    return total
}


const arr = [2, 3, -1, 1, 3]
console.log(solution(arr))