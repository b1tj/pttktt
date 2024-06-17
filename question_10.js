//Bài 10:
//Implemented Merge Sort
const data = [-23, 87, 15, -92, 5, 34, -17, 2, 2, 66, 100, -5, 2, 99, -48, 73, -12, 82, 41, -61, 38]
function merge(left, right) {
    let resultArr = [],
        leftIdx = 0,
        rightIdx = 0

    while (leftIdx < left.length && rightIdx < right.length) {
        if (left[leftIdx] < right[rightIdx]) {
            resultArr.push(left[leftIdx])
            leftIdx++
        } else {
            resultArr.push(right[rightIdx])
            rightIdx++
        }
    }

    return [...resultArr, ...left.slice(leftIdx), ...right.slice(rightIdx)]
}

function mergeSort(arr) {
    if (arr.length === 1) return arr

    const middle = Math.floor(arr.length / 2)
    const left = arr.slice(0, middle)
    const right = arr.slice(middle)

    return merge(mergeSort(left), mergeSort(right))
}

console.log(mergeSort(data))
