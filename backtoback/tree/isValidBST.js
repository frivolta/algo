const isValidBST = (root) => {
    if(!root){
        return true
    }
    return helper(root.left, -Infinity, root.val) && helper(root.right, root.val, Infinity)
}


const helper = (node, min, max) => {
    if(!node){
        return true
    }
    if(node.val>max || node.val<min){
        return false
    }
    return helper(node.left, min, node.val) && helper(node.right, node.val, max)
}


// Test scenario:
class TreeNode {
    constructor(val,left, right) {
        this.val = val;
        this.left = left || null; // Points to another TreeNode object
        this.right = right || null; // Points to another TreeNode object
    }
}

const tree1 = new TreeNode(2, new TreeNode(1, null, null), new TreeNode(4, new TreeNode(3), new TreeNode(5)))
const tree2 = new TreeNode(10, new TreeNode(2), new TreeNode(7, new TreeNode(3), new TreeNode(12)))
console.log(isValidBST(tree1))