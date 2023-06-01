function simple(quantity) {
    let index = 0;
    let number = 1;
    const listNumbers = []
    while(listNumbers.length < quantity) {
        let isSimple = true
        for (let i=2; i<number; i++) {
            if (number % i === 0) {
                isSimple = false
                break
            }
        }
        index++
        if (isSimple) {
            listNumbers.push(number)
        }
        number++
    }
    return listNumbers
}

console.time('simple')
arrOfSimple = simple(process.argv[2])
console.log(arrOfSimple)
console.timeEnd('simple')