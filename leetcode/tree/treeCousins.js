// [[depth, parent], [depth, parent]]
const isCousins = function(root, x, y) {
    const cousins = dfs(root, x, y, 0,null, [])
    if(cousins.length===2 && cousins[0][0] !== cousins[1][0] && cousins[0][1] !== cousins[1][1]){
        return true
    }
    return false
};

const dfs = (node, x, y, distance,parent, cs) => {
    if(!node){
        return
    }
    if(node.val === x || node.val === y){
        cs.push( [distance, parent])
        return
    }
    dfs(node.left, x, y, distance+1, node.val, cs)
    dfs(node.right, x, y, distance+1, node.val, cs)
    return cs
}

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}


const treeOne = new TreeNode(1)
treeOne.left = new TreeNode(2)
treeOne.right = new TreeNode(3)
treeOne.left.left = new TreeNode(4)
console.log(isCousins(treeOne, 4, 3))