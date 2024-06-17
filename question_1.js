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
