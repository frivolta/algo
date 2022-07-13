class Solution {
    longest = 0;
    solve(root) {
        this.dfs(root)
        return this.longest
    }

    dfs(node){
        if(!node) return 0
        const left = this.dfs(node.left)
        const right = this.dfs(node.right)
        if(node.val % 2 === 0){
            this.longest = Math.max(this.longest, left+right+1)
            return Math.max(left,right)+1
        }
        return 0
    }
}

class Tree {
    constructor(val, left = null, right = null) {
        this.val = val
        this.left = left
        this.right = right
    }
}
const tree = new Tree(0)
tree.left = new Tree(8)
tree.right = new Tree(2)
tree.right.left = new Tree(6)
tree.right.right = new Tree(0)
tree.right.left.left = new Tree(4)
const solution = new Solution()
console.log(solution.solve(tree))