const getTargetCopy = function (original, cloned, target) {
    const c = dfs(original, cloned, target)
    return c
};


const dfs = (o, c, t) => {
    if (!o) {
        return null
    }
    if (o.val === t) {
        return c
    }

    return dfs(o.left, c.left, t) || dfs(o.right, c.right, t)
}


function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}


const tree = new TreeNode(1)
tree.left = new TreeNode(4)
tree.right = new TreeNode(3)
tree.right.left = new TreeNode(6)
tree.right.right = new TreeNode(10)

const treeTwo = new TreeNode(1)
treeTwo.left = new TreeNode(4)
treeTwo.right = new TreeNode(3)
treeTwo.right.left = new TreeNode(6)
treeTwo.right.right = new TreeNode(10)


console.log(getTargetCopy(tree, treeTwo, 3))