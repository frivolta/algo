const longestPath = (graph) => {
    let max = 0;
    for(const node of Object.keys(graph)){
        const maxOfNode = longestFromNode(graph, node, 0, 0)
        max = Math.max(max, maxOfNode)
    }
    return max
};

const longestFromNode = (graph, node, distance, maxDistance)=>{
    if(graph[node].length===0){
        return distance
    }

    for(const n of graph[node]){
        const d = longestFromNode(graph, n, distance+1, maxDistance)
        maxDistance=Math.max(d, maxDistance)
    }

    return maxDistance
}


const graph = {
    a: ['c', 'b'],
    b: ['c'],
    c: [],
    q: ['r'],
    r: ['s', 'u', 't'],
    s: ['t'],
    t: ['u'],
    u: []
};

console.log(longestPath(graph));