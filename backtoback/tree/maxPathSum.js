let max = 0


function maxPathSum(tree) {
    let max = 0;
    const dfs = (node)=>{
        if(!node){
            return 0
        }

        left = dfs(node.left)
        right = dfs(node.right)

        max = Math.max(max, node.value+left+right)
        return node.value+Math.max(left, right)

    }
    dfs(tree)
    return max
}



// --> 6
const root = new TreeNode(1)
root.left = new TreeNode(3, new TreeNode(7, new TreeNode(8, new TreeNode(9))), new TreeNode(4, null, new TreeNode(5, null, new TreeNode(6))))
root.right = new TreeNode(2, null, null)


console.log(diameterOfBinaryTree(root))