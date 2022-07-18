const CountWays = function(n) {
    if(n===0){
        return 1
    }
    if(n<0){
        return 0
    }


    return CountWays(n-1)+CountWays(n-2)+CountWays(n-3);
};

console.log(`Number of ways: ---> ${CountWays(3)}`);
console.log(`Number of ways: ---> ${CountWays(4)}`);
console.log(`Number of ways: ---> ${CountWays(5)}`);