class TreeNode {
    constructor(val,left, right) {
        this.val = val;
        this.left = left || null; // Points to another TreeNode object
        this.right = right || null; // Points to another TreeNode object
    }
}

const isSymmetric = (root) => {
    if(!root) return true
    return dfs(root.left, root.right)
}

const dfs = (left, right) => {
    if(!left && !right){
        return true
    }

    if(left && right){
        if(left.val === right.val && right.val===left.val){
            return dfs(left.left, right.right) && dfs(left.right, right.left)
        }
    }

    return false
}


const nodes = new TreeNode(4, new TreeNode(2, new TreeNode(1), new TreeNode(2)), new TreeNode(2, new TreeNode(2), null))
console.log(isSymmetric(nodes))