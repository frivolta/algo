function allKindsOfNodeDepths(root) {
    return dfsWrapper(root, [])
}

const dfsWrapper = (node, sums=[])=>{
    if(node){
        sums.push(dfs(node, 0, []))
        dfsWrapper(node.left, sums)
        dfsWrapper(node.right, sums)
    }
    return sums.reduce((acc,val)=>acc+val)
}
const dfs = (node, distance=0) => {
    if(!node){
        return 0
    }
    return distance + dfs(node.left, distance+1)+dfs(node.right, distance+1)
}


/////////// Test scenario:
class TreeNode {
    constructor(value, left, right) {
        this.value = value;
        this.left = left || null; // Points to another TreeNode object
        this.right = right || null; // Points to another TreeNode object
    }
}

const tree = new TreeNode(1, new TreeNode(2, new TreeNode(4, new TreeNode(8), new TreeNode(9)), new TreeNode(5)), new TreeNode(3, new TreeNode(6), new TreeNode(7)))
console.log(allKindsOfNodeDepths(tree))