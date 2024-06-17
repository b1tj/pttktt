//Bài 1: n = 13500
function bai_1(n) {
    if (!(n % 500 === 0 && n > 0)) return 'n không hợp lệ'

    const arr = [5000, 2000, 1000, 500]
    const res = [0, 0, 0, 0]
    let arrIndex = 0

    while (n > 0) {
        if (n >= arr[arrIndex]) {
            n = n - arr[arrIndex]
            res[arrIndex]++
        } else {
            arrIndex++
        }
    }

    console.log(`Số tiền đổi được:`)
    res.map((el, idx) => {
        console.log(el + ' đồng xu loại ' + arr[idx])
    })
}

//Bài 2:

// const products = [
//     {
//         matHang: 'A',
//         trongLuong: 18,
//         giaTri: 25,
//     },
//     {
//         matHang: 'B',
//         trongLuong: 15,
//         giaTri: 24,
//     },
//     {
//         matHang: 'C',
//         trongLuong: 10,
//         giaTri: 25,
//     },
// ]

function bai_2(products, M) {
    const arr = [...products]
    let limit = M
    const res = []

    arr.map((item) => {
        item['trongSo'] = Math.round((item.giaTri / item.trongLuong) * 100) / 100
    })

    arr.sort((a, b) => b['trongSo'] - a['trongSo'])

    for (let i = 0; i < arr.length; i++) {
        if (limit > 0) {
            if (limit >= arr[i].trongLuong) {
                limit = limit - arr[i].trongLuong
                res.push({ matHang: arr[i].matHang, soLuong: arr[i].trongLuong })
            } else {
                res.push({ matHang: arr[i].matHang, soLuong: limit })
                break
            }
        }
    }

    return res
}

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

//Bài 4:

const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]

function bai_4(nums) {
    return findMax(nums, 0, nums.length - 1)
}

function findMax(nums, l, r) {
    if (l === r) return nums[l]

    let mid = Math.floor((l + r) / 2)
    let leftSum = findMax(nums, l, mid) //Recursively check left side for max sum
    let rightSum = findMax(nums, mid + 1, r) //recursively check right side for max sum
    const crossingSum = findCrossingSum(nums, l, mid, r) //Find max sum that includes left and right side
    return Math.max(crossingSum, leftSum, rightSum) //return whichever is largest
}

function findCrossingSum(nums, l, mid, r) {
    let sum = 0
    let maxLSum = -Infinity
    for (let i = mid; i >= l; i--) {
        sum += nums[i]
        maxLSum = Math.max(maxLSum, sum)
    }
    sum = 0
    let maxRSum = -Infinity
    for (let i = mid + 1; i <= r; i++) {
        sum += nums[i]
        maxRSum = Math.max(maxRSum, sum)
    }

    return maxRSum + maxLSum
}

//Bài 5:
// console.log(bai_5(5))

function bai_5(n) {
    if (n <= 0) return 1

    const dp = new Array(11).fill().map(() => new Array(11).fill(0))

    dp[0][0] = 1

    for (let m = 1; m <= n; m++) {
        for (let v = 0; v <= n; v++) {
            if (v < m) {
                dp[m][v] = dp[m - 1][v]
            } else {
                dp[m][v] = dp[m - 1][v] + dp[m][v - m]
            }
        }
    }

    dp.map((row) => console.log(row.toString()))

    return dp[n][n]
}

//Bài 6:

function bai_6() {
    const board = new Array(8).fill().map(() => new Array(8).fill(0))

    if (!solve8QUtil(board, 0)) {
        console.log('Solution does not exist')
    }

    printSolution(board)
}

function printSolution(board) {
    for (let i = 0; i < 8; i++) {
        let row = ''
        for (let j = 0; j < 8; j++) {
            // Represent Queens as 'Q' and empty slots as '.'
            row += board[i][j] ? 'Q ' : '. '
        }
        console.log(row)
    }
}

// Function to check if a queen can be placed on board[row][col]
function isSafe(board, row, col) {
    let i, j

    // Check the column on the left
    for (i = 0; i < col; i++) {
        if (board[row][i]) return false
    }

    // Check upper diagonal on the left
    for (i = row, j = col; i >= 0 && j >= 0; i--, j--) {
        if (board[i][j]) return false
    }

    // Check lower diagonal on the left
    for (i = row, j = col; j >= 0 && i < 8; i++, j--) {
        if (board[i][j]) return false
    }

    //is safe to place
    return true
}

function solve8QUtil(board, col) {
    // Base case: If all queens are placed, return true
    if (col >= 8) return true

    // Consider this column and try placing this queen in all rows one by one
    for (let i = 0; i < 8; i++) {
        // Check if the queen can be placed on board[i][col]
        if (isSafe(board, i, col)) {
            // Place this queen in board[i][col]
            board[i][col] = 1

            // Recursive to place the rest of the queens
            if (solve8QUtil(board, col + 1)) return true

            // If placing queen in board[i][col] doesn't lead to a solution, then backtrack
            board[i][col] = 0
        }
    }

    // If the queen cannot be placed in any row in this column, return false
    return false
}

//Bài 8:
function bai_8_DAC(number) {
    if (number <= 1) return 1

    return bai_8_DAC(number - 1) * number
}

function bai_8_DP(number) {
    const factorial = [1]

    for (let i = 1; i <= number; i++) {
        factorial.push(factorial[i - 1] * i)
    }

    return factorial[number]
}

//Bài 9:
// [100, 2, 5, 4, 7, 5, 6, 8, 0, 12, 34, 15]
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

//Bài 10:
//Implemented Merge Sort
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

//Bài 11:
// console.log(bai_11(items, 40))
// console.log(bai_11(items, 50))

const items = [
    {
        name: '1',
        a: 18,
        c: 25,
    },
    {
        name: '2',
        a: 15,
        c: 24,
    },
    {
        name: '3',
        a: 10,
        c: 25,
    },
    {
        name: '4',
        a: 15,
        c: 40,
    },
    {
        name: '5',
        a: 30,
        c: 50,
    },
]

function bai_11(items, w) {
    const res = []

    items.map((item) => {
        item['weight'] = Math.round((item.c / item.a) * 100) / 100
    })

    items = mergeSortWithKey(items, 'weight')

    console.log(items)

    let currentWeight = 0
    for (let i = items.length - 1; i >= 0; i--) {
        while (currentWeight + items[i].a <= w) {
            currentWeight += items[i].a
            res.push(items[i])
        }
    }

    return res
}

//Bài 12:
//console.log(bai_12(items, 70))

function bai_12(items, w) {
    const res = []

    items.map((item) => {
        item['weight'] = Math.round((item.c / item.a) * 100) / 100
    })

    items = mergeSortWithKey(items, 'weight')

    console.log(items)

    let currentWeight = 0
    for (let i = items.length - 1; i >= 0; i--) {
        if (currentWeight + items[i].a <= w) {
            currentWeight += items[i].a
            res.push(items[i])
        } else {
            break
        }
    }

    return res
}

//MergeSort with object
export function mergeWithKey(left, right, key) {
    let resultArr = [],
        leftIdx = 0,
        rightIdx = 0

    while (leftIdx < left.length && rightIdx < right.length) {
        if (left[leftIdx][key] < right[rightIdx][key]) {
            resultArr.push(left[leftIdx])
            leftIdx++
        } else {
            resultArr.push(right[rightIdx])
            rightIdx++
        }
    }

    return [...resultArr, ...left.slice(leftIdx), ...right.slice(rightIdx)]
}

export function mergeSortWithKey(arr, key) {
    if (arr.length <= 1) return arr

    const middle = Math.floor(arr.length / 2)
    const left = arr.slice(0, middle)
    const right = arr.slice(middle)

    return mergeWithKey(mergeSortWithKey(left, key), mergeSortWithKey(right, key), key)
}

//Bài 13:

function bai_13(arr, index, sum, subsequence, M) {
    const res = []
    // Nếu tổng hiện tại bằng M
    if (sum === M) {
        res.push(subsequence)
    }
    // Nếu tổng hiện tại lớn hơn M hoặc đã duyệt hết mảng
    else if (index < arr.length && sum < M) {
        // Không chọn phần tử hiện tại
        res.push(bai_13(arr, index + 1, sum, subsequence, M))
        // Chọn phần tử hiện tại
        subsequence.push(arr[index])
        res.push(bai_13(arr, index + 1, sum + arr[index], subsequence, M))
        subsequence.pop() // Xóa phần tử vừa thêm để thử nhánh khác
    }
    return res
}

console.log(bai_13([7, 1, 4, 3, 5, 6]))
