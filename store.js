function goods(id, name, description, sizes, price, avaible, cat=catalogue) {
    const newGood = {
        'id': id,
        'name': name,
        'description': description,
        'sizes': sizes,
        'price': price,
        'avaible': avaible,
    }
    cat.push(newGood)
    return newGood
}

function basketPosition(good, amount, bas=basket) {
    if (good.avaible === true) {
        const position = {
            'good': good,
            'amount': amount,
        }
        bas.push(position)
        return position
    } else {
        console.log('Товара', good.name, 'нет в наличии')
        return
    }

    
}

function remoteFromBasket(position, bas=basket) {
    bas.splice(position, 1)
}

function basketClear (bas=basket) {
    bas.length = 0
}

function orderCalculation(bas=basket) {
    total = {
        'totalAmount': bas.length,
        'totalSumm': bas.map(item => item.good.price * item.amount).reduce((sum, positionCost) => sum + positionCost, 0)
    }
    //console.log(total)
    return total
}

catalogue = []
basket = []

goods(1, 'tomato', 'rose_tomato', [10, 14, 20], 150, true)
goods(2, 'cucumber', 'fresh', [10, 12, 14], 200, true)
goods(3, 'beef', '100 days feeded', [1, 2, 3], 300, true)
goods(4, 'potato', 'young', [8, 9, 10], 80, false)
goods(5, 'milk', 'cow milk', [0.5, 1.0], 100, true)

//console.log(catalogue)

basketPosition(catalogue[0], 10)
basketPosition(catalogue[1], 2)
basketPosition(catalogue[3], 5)
basketPosition(catalogue[4], 6)
basketPosition(catalogue[2], 2)

remoteFromBasket(1)

//console.log(basket)

//basketClear()
console.log(basket)

totalCost = orderCalculation()
console.log(totalCost)