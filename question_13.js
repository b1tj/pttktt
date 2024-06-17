//Bài 13:

function findSubsequences(arr, M) {
    const res = []

    function backtrack(tempArr, start, remaining) {
        if (remaining === 0) {
            res.push([...tempArr])
            return
        }
        if (remaining < 0) {
            return
        }

        for (let i = start; i < arr.length; i++) {
            tempArr.push(arr[i])
            backtrack(tempArr, i + 1, remaining - arr[i])
            tempArr.pop()
        }
    }

    backtrack([], 0, M)
    return res
}

console.log(findSubsequences([7, 1, 4, 3, 5, 6], 11))
