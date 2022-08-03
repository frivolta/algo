# Scroll page:

```javascript
container.addEventListener("scroll", () => {
    const maxScroll = container.scrollHeight - container.clientHeight
    if (container.scrollTop === maxScroll) {
        fetchAndRender()
    }
})
```

# Debounce

```javascript
function debounce(callback, delay, immediate = false) {
    let timer = null
    return function (...args) {
        clearTimeout(timer)
        const shouldCallImmediatly = timer === null && immediate
        if (shouldCallImmediatly) {
            callback.apply(this, args)
        }
        timer = setTimeout(() => {
            if (!immediate) {
                callback.apply(this, args)
            }
            timer = null
        }, delay)
    }
}
```

# Quick Sort

```javascript
var items = [5, 3, 7, 6, 2, 9];

function swap(items, leftIndex, rightIndex) {
    var temp = items[leftIndex];
    items[leftIndex] = items[rightIndex];
    items[rightIndex] = temp;
}

function partition(items, left, right) {
    var pivot = items[Math.floor((right + left) / 2)], //middle element
        i = left, //left pointer
        j = right; //right pointer
    while (i <= j) {
        while (items[i] < pivot) {
            i++;
        }
        while (items[j] > pivot) {
            j--;
        }
        if (i <= j) {
            swap(items, i, j); //sawpping two elements
            i++;
            j--;
        }
    }
    return i;
}

function quickSort(items, left, right) {
    var index;
    if (items.length > 1) {
        index = partition(items, left, right); //index returned from partition
        if (left < index - 1) { //more elements on the left side of the pivot
            quickSort(items, left, index - 1);
        }
        if (index < right) { //more elements on the right side of the pivot
            quickSort(items, index, right);
        }
    }
    return items;
}

// first call to quick sort
var sortedArray = quickSort(items, 0, items.length - 1);
console.log(sortedArray); //prints [2,3,5,6,7,9]
```

# Throttle

```javascript
function throttle(callback, delay) {
    let timer = null;
    let lastCalledTime = 0;
    return function (...args) {
        const currentTime = Date.now()
        const timeSinceLastCall = currentTime - lastCalledTime;
        const delayRemaining = delay - timeSinceLastCall;

        if (delayRemaining <= 0) {
            lastCalledTime = currentTime
            callback.apply(this, args)
        } else {
            clearTimeOut(timer)
            timer = setTimeOut(() => {
                lastCalledTime = Date.now();
                callback.apply(this, args)
            }, delayRemaining)
        }

    }
}
```

# Spiral Traverse

```javascript
function spiralTraverse(array) {
    const res = []
    let sR = 0;
    let eR = array.length - 1;
    let sC = 0;
    let eC = array[0].length - 1;

    while (sR <= eR && sC <= eC) {
        for (let c = sC; c <= eC; c++) {
            res.push(array[sR][c])
        }
        for (let r = sR + 1; r <= eR; r++) {
            res.push(array[r][eC])
        }
        for (let c = eC - 1; c >= sC; c--) {
            if (sR === eR) break;
            res.push(array[eR][c])
        }

        for (let r = eR - 1; r > sR; r--) {
            if (sC === eC) break;
            res.push(array[r][sC])
        }

        sR++
        eR--
        sC++
        eC--
    }
    return res
}
```