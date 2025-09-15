/**
 * Params por valor
 */
let a = 2
let b = 3

const suma = (a, b) => {
    return a + b
}

console.log(suma(a, b))
console.log(a)
console.log(b)

/**
 * Params por ref (se modifica el original)
 */
let array = [1,2,3];
const deleteAll = (array) => {
    return array.pop()
}

console.log(deleteAll(array))
console.log(array)

/**
 * Params por valor con array
 */
let array2 = [1,2,3];
const deleteAll2 = (array) => {
    let newArr = [...array]
    return newArr.pop()
}

console.log(deleteAll2(array2))
console.log(array2)