// ! October 2021 (58.3 out of 100)
// * https://programmers.co.kr/learn/courses/30/lessons/42839

/**
 * Letting you know, these days I write what I learned here like this..
 * 
 * Permutation: Order matters (verb: permute)
 * Combination: Order does not matter
 * 
 * array.slice() without argument can be just a simple copy (instead of address)
 */

const { green, red } = require('chalk')
const { isPrime } = require('./lambda')
const MAX = 9999999

const solution = (input) => {
  let answerCnt = 0;

  // 1) Read numbers
  const nums = new Array(10).fill(0); // ? Possibly fastest, Python [0] * 10
  
  // 2) Fill in numbers
  input.split("").map(val => val * 1).forEach(el => nums[el] = nums[el] + 1)

  // 3) Loop through until the max
  for (let i = 3; i <= MAX; i+=2) {
    const copiedNums = nums.slice()

    // a) First check if the number is valid
    let notEnough = false;

    `${i}`
      .split("")
      .map(el => el * 1)
      .forEach(el => {
        copiedNums[el] = copiedNums[el] - 1
        if (copiedNums[el] < 0) notEnough = true
      })

    if (notEnough) continue

    // b) Then check if it is prime number
    if (isPrime(i)) answerCnt++
  }
  
  // 4) Finally return answer
  return answerCnt
}

const data = [
  { input: "17", answer: 3 },
  { input: "011", answer: 2 },
]

const logger = data => console.log(data)
let cnt = 0

data.forEach(el => {
  if (solution(el.input) === el.answer) logger(`${el.input}: ${green('OK')}`)
  else {
    logger(`${el.input}: ${red('FAILED')}, got ${solution(el.input)}, should have ${el.answer}`)
    cnt++
  }
})

const rate = Math.round((data.length - cnt) / data.length * 100)
if (cnt > 0) logger(red(`Failed ${cnt} time(s) out of ${data.length}: `) + rate + "%")
else logger(green(`Passed all!`))