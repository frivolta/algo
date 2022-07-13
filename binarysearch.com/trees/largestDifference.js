class Solution {
    ans = 0
    solve(root) {
        this.dfs(root)
        return this.ans
    }
    dfs(node){
        if(!node) {
            return [Infinity, -Infinity]
        }

        if(!node.left && !node.right){
            return [node.val, node.val]
        }

        const left = this.dfs(node.left)
        const right = this.dfs(node.right)

        let min = Math.min(left[0], right[0])
        let max = Math.max(left[1], right[1])

        this.ans = Math.max(this.ans, Math.max(Math.abs(node.val-min), Math.abs(node.val-max)))
        min = Math.min(node.val, min)
        max = Math.max(node.val, max)
        return [min, max]
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
tree.left = new Tree(4)
tree.right = new Tree(2)
tree.right.left = new Tree(1)
tree.right.right = new Tree(7)
tree.right.left.left = new Tree(6)
tree.right.left.right = new Tree(3)

const treeTwo = new Tree(0, new Tree(0))
const solution = new Solution()
console.log(solution.solve(treeTwo))