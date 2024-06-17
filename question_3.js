//Bài 3:

// const activityList = [
//     { start: 1, finish: 3 },
//     { start: 3, finish: 4 },
//     { start: 4, finish: 6 },
//     { start: 2, finish: 8 },
//     { start: 6, finish: 10 },
//     { start: 4, finish: 13 },
//     { start: 10, finish: 14 },
//     { start: 12, finish: 15 },
//     { start: 11, finish: 16 },
// ]

function bai_3(arr) {
    if (arr.length === 1) return arr

    arr.sort((a, b) => a.finish - b.finish)
    let j = 0
    const res = [arr[0]]

    for (let i = 1; i < arr.length; i++) {
        if (arr[i].start >= arr[j].finish) {
            res.push(arr[i])
            j = i
        }
    }

    return res
}
