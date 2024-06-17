//Bài 2:

const products = [
    {
        matHang: 'A',
        trongLuong: 18,
        giaTri: 25,
    },
    {
        matHang: 'B',
        trongLuong: 15,
        giaTri: 24,
    },
    {
        matHang: 'C',
        trongLuong: 10,
        giaTri: 25,
    },
]

function bai_2(products, M) {
    const arr = [...products]
    let limit = M
    const res = []

    arr.map((item) => {
        item['trongSo'] = Math.round((item.giaTri / item.trongLuong) * 100) / 100
    })

    arr.sort((a, b) => b['trongSo'] - a['trongSo'])

    console.log(arr, '\n')

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

console.log(bai_2(products, 20))
