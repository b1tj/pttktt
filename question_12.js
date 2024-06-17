//Bài 12:
console.log(bai_12(items, 70))

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
