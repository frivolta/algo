const findMode = function (root) {
    const m = {}
    let max = -Infinity
    dfs(root, m)
    for (const val of Object.values(m)) {
        if (typeof val === "number") {
            max = Math.max(max, val)
        }
    }
    const ans = []
    for(const k in m){
        if(m[k] === max){
            ans.push(parseInt(k))
        }
    }
    return ans
};

function dfs(node, m) {
    if (!node) {
        return
    }
    dfs(node.left, m)
    if (node.val in m) {
        m[node.val] += 1
    } else {
        m[node.val] = 1
    }
    dfs(node.right, m)
    return
}


function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}


const tree = new TreeNode(1)
tree.left = new TreeNode(null)
tree.right = new TreeNode(2)
tree.right.left = new TreeNode(2)
console.log(findMode(tree))