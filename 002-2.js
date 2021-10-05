// ! 36.4 out of 100
// ! On Oct 4, 2021 #3 Trial


const compare = (a, b) => {
  let [aCopy, bCopy] = [a, b]

  // Make it into int Array!
  let aArr = []
  let bArr = []
  while (aCopy > 0) { aArr.unshift(aCopy % 10); aCopy = aCopy/10|0 } // ? What is /10|0 lol
  while (bCopy > 0) { bArr.unshift(bCopy % 10); bCopy = bCopy/10|0 }
  if (aArr.length === 0) aArr = [0]
  if (bArr.length === 0) bArr = [0]
  const aLen = aArr.length - 1
  const bLen = bArr.length - 1

  const maxLength = Math.max(aArr.length, bArr.length)

  for (let i = 0; i < maxLength; i++) {
    const aAt = i > aLen ? aLen : i
    const bAt = i > bLen ? bLen : i

    if (aArr[aAt] === bArr[bAt]) continue
    return bArr[bAt] - aArr[aAt] // ! Reverse, as you want to order desc.
  }

  return 0;
}

const solution = (numbers) => {
  // 1) Sort
  const sorted = numbers.sort((a, b) => compare(a, b))

  // 2) Convert into string
  let answer = ''
  for (const val of sorted) { answer += `${val}` }

  // 3) Return the answer
  return answer
}

const numbers = [3, 30, 34, 5, 9]	// "9534330"
const anotherTest = [6, 10, 2]	// "6210"
const myTest = [0, 0, 0]

// Testing
const testTarget = myTest
console.log(testTarget)
console.log("****************")
console.log(solution(testTarget))

// console.log(toFourDigit(4))
  
// console.log(solution(numbers))