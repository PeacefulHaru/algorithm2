// ! Second trial 18.2 out of 100
// ? I think the comparing method itself is okay.. but the 
// ? converting algorithm is a bit bad
// 


const numbers = [3, 30, 34, 5, 9]	// "9534330"
const anotherTest = [6, 10, 2]	// "6210"
const myTest = [0, 0, 0, 0, ...numbers, 0, 10,]

const compare = (a, b) => {
  let [aCopy, bCopy] = [a, b]
  if (a < b) {
    const temp = a
    a = b
    b = temp
  }

  // Make it into int Array!
  let aArr = []
  let bArr = []
  while (aCopy > 0) { aArr.unshift(aCopy % 10); aCopy = aCopy/10|0 } // ? What is /10|0 lol
  while (bCopy > 0) { bArr.unshift(bCopy % 10); bCopy = bCopy/10|0 }
  if (aArr.length === 0) aArr = [0]
  if (bArr.length === 0) bArr = [0]

  for (let i = 0; i < bArr.length; i++) {
    if (aArr[i] === bArr[i]) continue
    return aArr[i] > bArr[i] ? -1 : 1
  }

  // check
  const lastB = bArr[bArr.length - 1]
  for (let i = bArr.length - 1; i < aArr.length; i++) {
    if (aArr[i] === lastB) continue;
    return aArr[i] > lastB ? -1 : 1
  }

  // by default
  return 0
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

const testTarget = myTest
// console.log(testTarget)
console.log(solution(testTarget))

// console.log(toFourDigit(4))
  
// console.log(solution(numbers))