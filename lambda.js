/**
 * 
 * This lambda file supports only ES5
 */

// ! Version 1.0

exports.print = data => console.log(data)

// ! Version 1.0 - Modified on October, 2021
// * The most efficient way to define if the number is prime
exports.isPrime = (num) => {
  if (num < 2) return false
  else if (num === 2) return true
  
  const primeCheckingMax = Math.sqrt(num)
  for (let i = 2; i < primeCheckingMax; i++) {
    if (num % i === 0) return false // not prime
  }

  return true // as it has passed tests above
}

// ! Version 1.0 - Modified on October, 2021
// * 
exports.arrayMatch = (arr, arr2) => {
  if (arr.length !== arr2.length) return false

  for (let i = 0; i < arr.elngth; i++) {
    if (arr[i] !== arr2[i]) return false
  }

  return true // as it has passed tests above
}
