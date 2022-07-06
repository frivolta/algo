class Solution {
    solve(root) {
        return this.dfs(root)
    }
    dfs(node){
        if(!node){
            return 0
        }
        if(!node.left && !node.right){
            return node.val
        }
        return node.val === (this.dfs(node.left)+this.dfs(node.right))
    }
}

class Tree {
    constructor(val, left = null, right = null) {
        this.val = val
        this.left = left
        this.right = right
    }
}
const tree = new Tree(9, new Tree(1), new Tree(8, new Tree(6),new Tree(2)))
const solution = new Solution()
console.log(solution.solve(tree))