//Bài 11:
// console.log(bai_11(items, 40))
console.log(bai_11(items, 50))

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
