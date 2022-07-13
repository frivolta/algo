const rangeSumBST = function(root, low, high) {
    return dfs(root, low, high)
};

const dfs = (node, l, h)=>{
    if(!node){
        return 0
    }
    if(!node.left && !node.right){
        if(node.val<=h && node.val>=l){
            return node.val
        }
        return 0
    }
    const left = dfs(node.left, l, h)
    const right = dfs(node.right, l, h)
    return node.val<=h && node.val>=l ? node.val+left+right : left+right
}


function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

const tree = new TreeNode(10)
tree.left = new TreeNode(5)
tree.right = new TreeNode(15)
tree.left.left = new TreeNode(3)
tree.left.right = new TreeNode(7)
tree.right.right = new TreeNode(18)

console.log(rangeSumBST(tree, 7,15))