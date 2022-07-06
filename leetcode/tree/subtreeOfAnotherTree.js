function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}



const isSubtree = function(root, subRoot) {
    return dfs(root, subRoot)
};

const dfs = (root, subtree)=>{
    if(!root){
        return false
    }
    console.log("Trying with", root, " and, ",subtree)
    const isSame = sameTree(root, subtree)
    if(isSame){
        return true
    }
    return dfs(root.left, subtree) || dfs(root.right, subtree)
}

const sameTree = (treeOne, treeTwo) => {
    if(!treeOne && !treeTwo ){
        return true
    }
    if((treeOne && !treeTwo) || (treeTwo && !treeOne)){
        return false
    }
    if(treeOne.val !== treeTwo.val){
        return false
    }
    return sameTree(treeOne.left, treeTwo.left) && sameTree(treeOne.right, treeTwo.right)
}

//const tree = new TreeNode(3, new TreeNode(4,  new TreeNode(1), new TreeNode(2)), new TreeNode(5))
//const subTree = new TreeNode(4,  new TreeNode(1), new TreeNode(2))
const tree = new TreeNode(5, new TreeNode(1, new TreeNode(2, new TreeNode(1000), new TreeNode(5)), new TreeNode(3)))
const subTree = new TreeNode(1, new TreeNode(2, new TreeNode(1000), new TreeNode(5)), new TreeNode(3))
console.log(isSubtree(tree, subTree))