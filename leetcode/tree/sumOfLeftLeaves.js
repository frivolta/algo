const sumOfLeftLeaves = function (root) {
    if (!root || (!root.left && !root.right)) return 0
    return dfs(root, false)
};

const dfs = (node, isLeft) => {
    if (!node) {
        return 0
    }
    if (!node.left && !node.right) {
        if (isLeft) {
            return node.val
        } else {
            return 0
        }
    }
    const left = dfs(node.left, true)
    const right = dfs(node.right, false)
    return left + right
}

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}


const tree = new TreeNode(3, new TreeNode(9), new TreeNode(20, new TreeNode(15), new TreeNode(7)))
console.log(sumOfLeftLeaves(tree))