class Solution {
    solve(ports, shipments) {
        let path = 0;
        for(const shipment of shipments) {
         const distance = this.dfs(ports, shipment[0], 0, shipment[1], new Set(), Infinity)
            if(distance!==Infinity){
                path+=distance
            }
        }
        return path
    }
    dfs(graph, node, distance,end, visited, min){
        // If the node has reached the end I return the distance
        if(node===end) return distance
        if(visited.has(node)) return 0
        for(const edge of graph[node]){
            visited.add(node)
            const foundAt = this.dfs(graph, edge, distance+1, end, visited, min)
            if(foundAt!==0) {
                min = Math.min(min, foundAt)
            }
        }


        // If I didn't reached the end return 0 instead of the distance
        return min
    }
}

const ports = [
    [],
    [],
    [0]
]
const shipments = [
    [0, 1],
    [2,0],
    [1,2]
]
const solution = new Solution()
console.log(solution.solve(ports, shipments))