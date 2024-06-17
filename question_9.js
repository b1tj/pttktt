//Bài 9:
const data = [100, 2, 5, 4, 7, 5, 6, 8, 0, 12, 34, 15]
function quickSort(arr) {
    if (arr.length < 2) return arr

    const pivotIdx = arr.length - 1
    const pivot = arr[pivotIdx]

    const left = []
    const right = []

    for (let i = 0; i < pivotIdx; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }

    return [...quickSort(left), pivot, ...quickSort(right)]
}

console.log(quickSort(data))
