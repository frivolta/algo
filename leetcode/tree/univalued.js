const isUnivalTree = function(root) {
    if(!root){
        return false
    }

    return dfs(root, null)
};

const dfs = (node, parent)=>{
    if(!node) return true
    if(parent!==null && node.val!==parent)return false
    return dfs(node.left, node.val) && dfs(node.right, node.val)
}
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}


const tree = new TreeNode(1, new TreeNode(1, new TreeNode(1, new TreeNode(1), new TreeNode(1))), new TreeNode(1, new TreeNode(1), new TreeNode(1, null, new TreeNode(1))))
console.log(isUnivalTree(tree, 22))