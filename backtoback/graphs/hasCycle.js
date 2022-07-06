const hasCycle = (graph) => {
    for(const node of Object.keys(graph)) {
        const checkForNode = dfs(graph, node,new Set())
        console.log(checkForNode)
    }
};
const dfs = (graph, node, visited)=>{
    if(visited.has(node)){
        return true
    }

    visited.add(node)
    for (const edge of graph[node]){
        if(dfs(graph, edge, visited)) return true
    }
    return false
}

console.log(hasCycle({
    a: ["b", "c"],
    b: ["c"],
    c: ["d"],
    d: [],
}));