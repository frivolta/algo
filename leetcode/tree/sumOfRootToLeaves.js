

const sumRootToLeaf = function(root) {
    const allPaths = []
    let result = 0
    const dfs = (node, path)=>{
        if(!node){
            return
        }
        path+=node.val
        if(!node.left && !node.right){
            allPaths.push(path)
            return;
        }
        dfs(node.left, path)
        dfs(node.right, path)
        return
    }

    dfs(root, [])
    for(const path of allPaths){
        result+=parseInt(path, 2)
    }
    return result
};


function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}


const tree = new TreeNode(1, new TreeNode(0, new TreeNode(0), new TreeNode(1)), new TreeNode(1, new TreeNode(0), new TreeNode(1)))
console.log(sumRootToLeaf(tree, 22))