const isSameTree = function (p, q) {
    if(!p && !q){
        return true
    }
    if((p && !q) || (!p && q)){
        return false
    }
    return dfs(p, q)
};
const dfs = (one, two) => {
    if (!one && !two) {
        return true
    }
    if ((one && !two) || (!one && two)) {
        return false
    }
    if (one.val !== two.val) {
        return false
    }

    return dfs(one.left, two.left) && dfs(one.right, two.right)
}


function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}


const treeOne = new TreeNode(1)
treeOne.left = new TreeNode(2)
treeOne.right = new TreeNode(3)

const treeTwo = new TreeNode(1)
treeTwo.left = new TreeNode(2)
treeTwo.right = new TreeNode(3)

console.log(isSameTree(treeOne, treeTwo))