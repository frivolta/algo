const lowestCommonAncestor = function(root, p, q) {
    return dfs(root, p, q)
};
const dfs = (node, p, q)=>{
    if(!node){
        return null
    }
    if(node.val === p || node.val === q){
        return node.val
    }
    const left = dfs(node.left, p, q)
    const right = dfs(node.right, p, q)
    if(left && right){
        return node.val
    }else if(left && !right){
        return left
    }
    return right
}

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

const tree = new TreeNode(6)
tree.left=new TreeNode(2)
tree.right=new TreeNode(8)
tree.right.left=new TreeNode(7)
tree.right.right=new TreeNode(9)
tree.left.left = new TreeNode(0)
tree.left.right = new TreeNode(4)
tree.left.right.left = new TreeNode(3)
tree.left.right.right = new TreeNode(5)

console.log(lowestCommonAncestor(tree, 2, 8))