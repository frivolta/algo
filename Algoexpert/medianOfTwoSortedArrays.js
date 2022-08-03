/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let merged = new Array(nums1.length+nums2.length)
    let i=0;
    let j=0;
    let k=0;
    while(i<nums1.length && j<nums2.length){
        if(nums1[i]<=nums2[j]){
            merged[k]=nums1[i]
            k++
            i++
        }else{
            merged[k]=nums2[j]
            k++
            j++
        }
    }
    while(i<nums1.length){
        merged[k]=nums1[i]
        i++
        k++
    }
    while(j<nums2.length){
        merged[k]=nums2[j]
        j++;
        k++
    }
    const median =getMedian(merged)
    return median
};

function getMedian(arr){
    let isOdd = arr.length%2===1

    if(isOdd){
        const median = arr[Math.floor(arr.length/2)]
        return median
    }
    const middle = Math.floor(arr.length/2)
    return (arr[middle-1]+arr[middle])/2
}
