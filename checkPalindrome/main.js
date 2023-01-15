// function isPalindrome(str) {
//     let newString = str.toUpperCase()
//     let reversed = newString.split('').reverse().join('')
//     return newString === reversed
// }

// console.log(isPalindrome('Hello'))
// console.log(isPalindrome('Eye'))

/* -------------------------------------------------------------------------- */
/*                                  form two                                  */
/* -------------------------------------------------------------------------- */

// function isPalindrome(str) {
//     for (let i = 0; i < str.length / 2; i++) {
//         if (str[i] !== str[str.length - 1 - i]) {
//             return false
//         }
//     }
//     return true
// }

function isPalindrome(str) {
    for (let i = 0; i < str.length / 2; i++) {
        if (str[i] !== str[str.length - 1 - i]) {
            return false
        }
    }
    return true
}


console.log(isPalindrome('aabaa'))
