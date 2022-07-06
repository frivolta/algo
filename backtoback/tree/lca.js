/**
 * @param {TreeNode} root
 * @param {number} x
 * @param {number} y
 * @return {TreeNode}
 */
const lowestCommonAncestor = (root, x, y) => {
    // Going down
    if(!root) return null
    if(root.val === x || root.val === y) return root

    const left = lowestCommonAncestor(root.left, x,y)
    const right = lowestCommonAncestor(root.right, x, y)

    //Backwards
    if(left && right) return root
    return left? left:right
}