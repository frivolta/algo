const hasPathSum = (node, targetSum) => {
    if(!node && targetSum!==0) return false
    return dfs(node, targetSum)
}

const dfs = (node, targetSum)=>{
    if(!node){
        return false
    }
    const isLeaf = !node.left && !node.right
    // If is leaf and sum is 0 then I have a result
    if(isLeaf) {
        if(targetSum-node.val===0) {
            return true
        }
        // I can skip this check since if(!node) i will return false
        return false
    }

    // If it still not a leaf
    return dfs(node.left, targetSum-node.val) || dfs(node.right, targetSum-node.val)
}

// Test scenario:
class TreeNode {
    constructor(val,left, right) {
        this.val = val;
        this.left = left || null; // Points to another TreeNode object
        this.right = right || null; // Points to another TreeNode object
    }
}

const tree1 = new TreeNode(1, null, new TreeNode(2, new TreeNode(2), new TreeNode(5)))
const tree2 = new TreeNode(5, new TreeNode(5, new TreeNode(1), new TreeNode(-1)), null)

console.log(hasPathSum(tree2, 10))