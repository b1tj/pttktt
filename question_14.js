const N = 8 // Kích thước của bàn cờ (nxn)

const xMove = [2, 1, -1, -2, -2, -1, 1, 2]
const yMove = [1, 2, 2, 1, -1, -2, -2, -1]

function isSafe(x, y, board) {
    return x >= 0 && x < N && y >= 0 && y < N && board[x][y] === -1
}

function printSolution(board) {
    for (let x = 0; x < N; x++) {
        let row = ''
        for (let y = 0; y < N; y++) {
            row += board[x][y] + '\t'
        }
        console.log(row)
    }
}

function solveKT() {
    let board = Array.from({ length: N }, () => Array(N).fill(-1))

    // Đặt bước đầu tiên của quân mã tại ô (0, 0)
    board[0][0] = 0

    // Bắt đầu từ ô (0, 0) với bước thứ 0
    if (!solveKTUtil(0, 0, 1, board, xMove, yMove)) {
        console.log('Solution does not exist')
    } else {
        printSolution(board)
    }
}

function solveKTUtil(x, y, movei, board, xMove, yMove) {
    if (movei === N * N) {
        return true
    }

    for (let k = 0; k < 8; k++) {
        let next_x = x + xMove[k]
        let next_y = y + yMove[k]
        if (isSafe(next_x, next_y, board)) {
            board[next_x][next_y] = movei
            if (solveKTUtil(next_x, next_y, movei + 1, board, xMove, yMove)) {
                return true
            } else {
                board[next_x][next_y] = -1 // Quay lui
            }
        }
    }
    return false
}

solveKT()
