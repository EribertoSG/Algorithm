const getMaxMin = () => {
    let array = [10, 10, 50, 60, 10, 5, 0,45, 100, 200, 400]
    let max = array[0]
    let min = array[0]
    for (let i = 1; i < array.length; i++) {
        if (max < array[i]) {
            max = array[i]
        }

        if (min > array[i]) {
            min = array[i]
        }
    }
    return [max, min]
}

console.log('El numero mayor de este array es: ', getMaxMin()[0])
console.log('El numero menor de este array es: ', getMaxMin()[1])
