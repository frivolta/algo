/**
 * @param {Array<number>} nums
 * @return {TreeNode}
 */
const sortedArrayToBST = (nums) => {
    return buildMinHeighBST(nums, 0, nums.length);
}

const buildMinHeighBST = (nums, left, right) => {
    if (left >= right) {
        return null;
    }

    const middleIndex = left + Math.floor((right - left) / 2);
    const newNode = new TreeNode(nums[middleIndex]);

    newNode.left = buildMinHeighBST(nums, left, middleIndex);
    newNode.right = buildMinHeighBST(nums, middleIndex + 1, right);

    return newNode;
}

const getMiddle = (arr)=>Math.floor(arr.length/2)


// Test scenario:
class TreeNode {
    constructor(val,left, right) {
        this.val = val;
        this.left = left || null; // Points to another TreeNode object
        this.right = right || null; // Points to another TreeNode object
    }
}


console.log(sortedArrayToBST([1, 2,3,4,5,6,7]))