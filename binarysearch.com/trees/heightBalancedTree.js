class Solution {
    solve(root) {
        return this.dfs(root, 0)
    }
    dfs(node, currentDistance){
        if(!node){
            return currentDistance
        }
        const leftDistance = this.dfs(node.left, currentDistance+1)
        const rightDistance = this.dfs(node.right, currentDistance+1)
        const isThisBalanced = Math.abs(currentDistance-leftDistance)<=1 && Math.abs(currentDistance-rightDistance)<=1
        const areChildBalanced = Math.abs(leftDistance-currentDistance)<=1
        return isThisBalanced && areChildBalanced
    }
}

class Tree {
    constructor(val, left = null, right = null) {
        this.val = val
        this.left = left
        this.right = right
    }
}
const tree = new Tree(1, new Tree(0), new Tree(4, null, new Tree(12)))
const solution = new Solution()
console.log(solution.solve(tree))