const maxDepth = function(root, distance = 0, max=0) {
    if(!root){
        console.log("I reached max distance, returning ", distance)
        return distance
    }
    const left = maxDepth(root.left, distance+1)
    const right = maxDepth(root.right, distance+1)
    console.log('Computing max between left and right', left ,right)
    const lr = Math.max(left, right)
    max = Math.max(max, lr)
    console.log('Returning max between max and lr', max)
    return max
};
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

const tree = new TreeNode(3, new TreeNode(9), new TreeNode(20, new TreeNode(15, new TreeNode(4)), new TreeNode(7)))
console.log(maxDepth(tree))