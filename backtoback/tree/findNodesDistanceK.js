
function findNodesDistanceK(tree, target, k) {
    const leftLevels = levelOrderTraversal(tree.left,0,[])
    const rightLevels = levelOrderTraversal(tree.right,0,[])
    const levels = [...leftLevels.reverse(), [tree.value], ...rightLevels]
    let startingIndex = null
    for(let i = 0; i<levels.length; i++){
        if(levels[i].indexOf(target)>-1) startingIndex = i
    }

    const nodesFromK = []

    // Edge case same array has a distance of 2
    if(k===2 && levels[startingIndex].length>1){
        for (const val of levels[startingIndex]){
            if(val!==target) nodesFromK.push(val)
        }
    }

    if(startingIndex-k>=0){
        nodesFromK.push(...levels[startingIndex-k])
    }
    if(startingIndex+k<=levels.length-1){
        nodesFromK.push(...levels[startingIndex+k])
    }


    return nodesFromK
}

const levelOrderTraversal = (node, distance,paths) => {
   if(!node) return []

    if(!paths[distance]){
        paths[distance] = []
    }
    paths[distance].push(node.value)
    levelOrderTraversal(node.left, distance+1, paths)
    levelOrderTraversal(node.right, distance+1, paths)
    return paths
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

const tree = new TreeNode(1,new TreeNode(2, new TreeNode(4, new TreeNode(8), new TreeNode(9)), new TreeNode(5)), new TreeNode(3, new TreeNode(6), new TreeNode(7)))
console.log(findNodesDistanceK(tree, 8, 2))