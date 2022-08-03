// You are given a nested list of integers nestedList. Each element is either an integer or a list whose elements may also be integers or other lists.
//
//     The depth of an integer is the number of lists that it is inside of. For example, the nested list [1,[2,2],[[3],2],1] has each integer's value set to its depth.
//
// Return the sum of each integer in nestedList multiplied by its depth.
//
//     Input: nestedList = [[1,1],2,[1,1]]
// Output: 10
// Explanation: Four 1's at depth 2, one 2 at depth 1. 1*2 + 1*2 + 2*1 + 1*2 + 1*2 = 10.

const depthSum = (nestedList) => {
    return dfs(nestedList, 0)
};

const dfs = (element, depth)=>{
    if(!Array.isArray(element)){
        console.log(element, depth)
        return element*depth
    }

    let product = 0
    for(let i=0; i<element.length; i++){
        product = product+dfs(element[i], depth+1)
    }

    return product
}
console.log(depthSum([[1,1],2,[1,1]])) //27