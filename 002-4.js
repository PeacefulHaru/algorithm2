// ! ? out of 100, #5 Trial
// ! Oct 4, 2021 ~ Oct ?, 2021 (1 Day)
// https://programmers.co.kr/learn/courses/30/lessons/42746

const chalk = require('chalk')

const compare = (a, b) => {
    let [aCopy, bCopy] = a >= b ? [a, b] : [b, a]
    let [aArr, bArr] = [[], []]
    const isReversed = a < b ? -1 : 1
  
    // Make it into int Array!
    while (aCopy > 0) { aArr.unshift(aCopy % 10); aCopy = aCopy/10|0 } // ? What is /10|0 lol
    while (bCopy > 0) { bArr.unshift(bCopy % 10); bCopy = bCopy/10|0 }
    if (aArr.length === 0) aArr = [0]
    if (bArr.length === 0) bArr = [0]
    const aLen = aArr.length - 1
    const bLen = bArr.length - 1
  
    const maxLength = Math.max(aArr.length, bArr.length)
    const minLength = Math.min(aArr.length, bArr.length)    

    for (let i = 0; i < maxLength; i++) {
      const aAt = i > aLen ? i % (aLen + 1) : i
      const bAt = i > bLen ? i % (bLen + 1) : i

      if (aArr[aAt] === bArr[bAt]) continue
      return (bArr[bAt] - aArr[aAt]) * isReversed
    }

    return (bLen - aLen) * isReversed;
  }
  
const solution = (numbers) => {
  // 1) Sort
  const sorted = numbers.sort((a, b) => compare(a, b))

  // 2) Convert into string
  let answer = ''
  for (const val of sorted) { answer += `${val}` }

  // 3) Check if it is full of 0s..
  if (sorted[0] === 0) return "0"

  // 3) Return the answer
  return answer
}
  
const test = [
  /*
  { data: [6, 10, 2], target: `${6210}`},
  { data: [3, 30, 34, 5, 9], target: `${9534330}`},
  { data: [1994, 19], target: `${199419}`},
  { data: [94, 94818], target: `${Math.max(9494818, 9481894)}`},
  { data: [94, 94978], target: `${Math.max(9494978, 9497894)}`},
  { data: [94, 94948], target: `${Math.max(9494948, 9494894)}`},
  { data: [0, 3], target: `${30}`},
  { data: [0, 0], target: `${0}`},
  { data: [0, 0, 9, 7, 97, 999], target: `${999997700}`},*/
  { data: [74, 74748], target: `${Math.max(7474748, 7474874)}`},
  { data: [74, 74747], target: `${Math.max(7474747, 7474774)}`},
  { data: [74, 0, 74, 74747], target: `${7474774740}`},
  { data: [74, 74746], target: `${Math.max(7474746, 7474674)}`},
  { data: [23, 232, 21, 212], target: `${Math.max(2323221212, 2322321221, 2323221221)}`} // back is correct.
]

let failedNumber = 0
test.forEach(el => {
  const result = solution(el.data)
  console.log("\n" + result) 
  if (result !== el.target) {
    console.log(chalk.red(`FAIL`))
    failedNumber++
  }
  else console.log(chalk.green(`OK`))
})

if (failedNumber > 0) console.log(chalk.yellow(`Failed ${failedNumber} time(s)`))
else console.log(chalk.green("ALL PASSED"))