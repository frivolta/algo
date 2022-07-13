const searchBST = function(root, val) {
    while(root && root.val){
        if(root.val === val){
            return root
        }else if(root.val>val){
            root = root.left
        }else{
            root = root.right
        }
    }
    return null
};


function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}


const tree = new TreeNode(4)
tree.left = new TreeNode(2)
tree.right = new TreeNode(7)
tree.left.left = new TreeNode(1)
tree.left.right = new TreeNode(3)
console.log(searchBST(tree, 2))