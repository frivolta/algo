function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

const minDepth = function (root) {
    if (!root) return 0
    return dfs(root, 0) + 1
};

const dfs = (node, distance) => {
    if (!node) {
        return Infinity
    }
    if (!node.left && !node.right) {
        return distance
    }

    const left = dfs(node.left, distance + 1)
    const right = dfs(node.right, distance + 1)

    return Math.min(left, right)

}

const tree = new TreeNode(3, new TreeNode(9), new TreeNode(20, new TreeNode(15), new TreeNode(7)))
console.log(minDepth(tree))