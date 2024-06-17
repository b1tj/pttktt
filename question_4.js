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

console.log(bai_4(nums))
