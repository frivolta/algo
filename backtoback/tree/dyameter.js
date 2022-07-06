let max = 0

const diameterOfBinaryTree = (root) => {
    helper(root)
    return max
}
const helper = (node) => {
    if (!node) {
        return 0
    }

    const left = helper(node.left)
    const right = helper(node.right)

    max =  Math.max(max, left+right)

    return 1+Math.max(left,right)
}

// Test scenario:
class TreeNode {
    constructor(val, left, right) {
        this.val = val;
        this.left = left || null; // Points to another TreeNode object
        this.right = right || null; // Points to another TreeNode object
    }
}


// --> 6
const root = new TreeNode(1)
root.left = new TreeNode(3, new TreeNode(7, new TreeNode(8, new TreeNode(9))), new TreeNode(4, null, new TreeNode(5, null, new TreeNode(6))))
root.right = new TreeNode(2, null, null)


console.log(diameterOfBinaryTree(root))




