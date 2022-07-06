const findTarget = function(root, k) {
    const order = dfs(root, [])
    let lp = 0
    let rp = order.length-1
    while(lp<rp){
        const l = order[lp]
        const r = order[rp]
        if(l+r===k){
            return true
        }else if(l+r>k){
            rp--
        }else{
            lp++
        }
    }
    return false
};

const dfs = (node, order)=> {
    if(node){
        dfs(node.left,order)
        order.push(node.val)
        dfs(node.right, order)
    }
    return order
}
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}



const tree = new TreeNode(5, new TreeNode(3, new TreeNode(2), new TreeNode(4)), new TreeNode(6, null, new TreeNode(7)))
console.log(findTarget(tree, 9))