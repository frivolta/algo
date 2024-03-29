let findLPSLength = function (st) {
    function findLPSLengthRecursive(st, startIndex, endIndex) {
        if (startIndex > endIndex) return 0;

        // every string with one character is a palindrome
        if (startIndex === endIndex) return 1;

        // case 1: elements at the beginning and the end are the same
        if (st[startIndex] === st[endIndex]) {
            const remainingLength = endIndex - startIndex - 1;
            // check if the remaining string is also a palindrome
            if (remainingLength === findLPSLengthRecursive(st, startIndex + 1, endIndex - 1)) {
                return remainingLength + 2;
            }
        }

        // case 2: skip one character either from the beginning or the end
        const c1 = findLPSLengthRecursive(st, startIndex + 1, endIndex);
        const c2 = findLPSLengthRecursive(st, startIndex, endIndex - 1);
        return Math.max(c1, c2);
    }

    return findLPSLengthRecursive(st, 0, st.length - 1);
};

console.log(`Length of LPS ---> ${findLPSLength('abdbca')}`);
console.log(`Length of LPS ---> ${findLPSLength('cddpd')}`);
console.log(`Length of LPS ---> ${findLPSLength('pqr')}`);