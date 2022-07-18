const findMaxSteal = function(wealth) {
    function findMaxStealRecursive(wealth, currentIndex) {
        if (currentIndex >= wealth.length) return 0;

        // steal from current house and skip one to steal from the next house
        const stealCurrent = wealth[currentIndex] + findMaxStealRecursive(wealth, currentIndex + 2);
        // skip current house to steel from the adjacent house
        const skipCurrent = findMaxStealRecursive(wealth, currentIndex + 1);

        return Math.max(stealCurrent, skipCurrent);
    }
    return findMaxStealRecursive(wealth, 0);
};

console.log(`Maximum stealing: ---> ${findMaxSteal([2, 5, 1, 3, 6, 2, 4])}`);
console.log(`Maximum stealing: ---> ${findMaxSteal([2, 10, 14, 8, 1])}`);