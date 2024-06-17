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

bai_6()
