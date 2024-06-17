//Bài 5:
console.log(bai_5(5))

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
