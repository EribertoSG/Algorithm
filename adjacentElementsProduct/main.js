//Dada una matriz de enteros, encuentra el par de elementos adyacentes 
//que tiene el producto más grande y devuelve ese producto.

function findLargestAdjacentProduct(arr) {
  let largestProduct = -Infinity
  for (let i = 0; i < arr.length - 1; i++) {
    let product = arr[i] * arr[i + 1]
    if (product > largestProduct) {
      largestProduct = product
    }
  }
  return largestProduct
}

console.log(findLargestAdjacentProduct([1, 2]))