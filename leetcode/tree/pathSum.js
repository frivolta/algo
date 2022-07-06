const hasPathSum = function (root, targetSum) {
    if(!root) return false
    return dfs(root,targetSum)
};
const dfs = (node, target)=>{
    if(!node){
        return false
    }
    if(!node.left && !node.right){
        console.log('On a LEAF', node.val, target, target-node.val)
        return target-node.val === 0
    }

    const left = dfs(node.left, target-node.val)
    const right = dfs(node.right, target-node.val)

    return left || right
}

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}


const tree = new TreeNode(5, new TreeNode(4, new TreeNode(11, new TreeNode(7), new TreeNode(2))), new TreeNode(8, new TreeNode(13), new TreeNode(4, null, new TreeNode(1))))
console.log(hasPathSum(tree, 22))