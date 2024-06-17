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

console.log('Devide & Conquer: ' + bai_8_DAC(5))

console.log('Dynamic Programming: ' + bai_8_DP(4))
