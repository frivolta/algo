const semestersRequired = (numCourses, prereqs) => {
    const adj = buildAdjList(numCourses, prereqs)
    let minSemester = null
    console.log(adj)
    for (let i=0; i<numCourses; i++){
        const semesters = dfs(adj, i, new Set())
        if(!minSemester) minSemester = semesters
        minSemester = Math.max(minSemester, semesters)
    }
    return minSemester
};
const dfs = (adj, node, visited)=>{
    if(!visited.has(node)){
        visited.add(node)
    }
    if(adj[node].length===0){
        return visited.size
    }

    for(const edge of adj[node]){
        dfs(adj, edge, visited)
    }
    return visited.size
}
const buildAdjList = (numCourses, prereqs)=>{
    const map = {}
    // Fill with empty
    for(let i=0;i<numCourses;i++){
        map[i]=[]
    }

    for(const pre of prereqs){
        map[pre[0]].push(pre[1])
    }
    return map
}

const numCourses = 5;
const prereqs = [
    [1, 0],
    [3, 4],
    [1, 2],
    [3, 2],
];
console.log(semestersRequired(numCourses, prereqs));