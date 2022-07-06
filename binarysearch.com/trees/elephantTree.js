class Solution {
    solve(root) {
        if (!root) {
            return 0
        }
        root.val += this.solve(root.left) + this.solve(root.right)
        return root
    }
}


class Tree {
    constructor(val, left = null, right = null) {
        this.val = val
        this.left = left
        this.right = right
    }
}
const tree = new Tree(2, new Tree(1, new Tree(0)), new Tree(4, new Tree(3)))
const solution = new Solution()
console.log(solution.solve(tree))