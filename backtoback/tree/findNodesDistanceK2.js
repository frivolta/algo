
function findNodesDistanceK(tree, target, k) {
    const adj = getAdjList(tree, null, {})

    let level = 0;
    const visited = new Set()
    visited.add(target)
    const queue = [[target, 0]]

    while (queue.length){
        const [node, distanceFromTarget] = queue.shift();

        if(distanceFromTarget === k){
            const asnw = [node]
            for(const [qu] of queue){
                asnw.push(qu)
            }
            return asnw
        }
        const edges = adj[node]

        for(const edge of edges){
            if(!visited.has(edge)){
                queue.push([edge, distanceFromTarget+1])
                visited.add(edge)
            }
        }
    }
return []
}

function getAdjList(node, parent, adjList){
    if(!node){
        return null
    }
    if(!Object.keys(adjList).includes(node.value)){
        adjList[node.value] = []
        if(node.left) adjList[node.value].push(node.left.value)
        if(node.right) adjList[node.value].push(node.right.value)
        if(parent) adjList[node.value].push(parent.value)
    }

    getAdjList(node.left, node, adjList)
    getAdjList(node.right, node, adjList)

    return adjList
}



/////////// Test scenario:
// Test scenario:
class TreeNode {
    constructor(value, left, right) {
        this.value = value;
        this.left = left || null; // Points to another TreeNode object
        this.right = right || null; // Points to another TreeNode object
    }
}

const tree = new TreeNode(1, new TreeNode(2, new TreeNode(4), new TreeNode(5)), new TreeNode(3, null, new TreeNode(6, new TreeNode(7), new TreeNode(8))))
const tree2 = new TreeNode(1, new TreeNode(2, new TreeNode(4)), new TreeNode(3, new TreeNode(5), new TreeNode(6, null, new TreeNode(7), null, new TreeNode(8))))
console.log(findNodesDistanceK(tree2, 3, 1))