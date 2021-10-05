// ! October, 2021
// https://programmers.co.kr/learn/courses/30/lessons/42747

const { green, red } = require('chalk')

const solution = (citations) => {
  const arr = citations.sort((a, b) => b - a)
  const leng = arr.length
  
  for (let i = 0; i < leng; i++) {
    const [value, front, back] = [arr[i], i + 1, leng - i]
    if (value >= front && value <= back) return value
  }

  return 0 // by default
}

const data = [
  { input: [3, 0, 6, 1, 5], answer: 3 },
  { input: [0, 0, 0, 0, 0], answer: 0 }
]

const logger = data => console.log(data)
let cnt = 0

data.forEach(el => {
  if (solution(el.input) === el.answer) logger(`${el.input}: ${green('OK')}`)
  else {
    logger(red('FAIL'))
    cnt++
  }
})

if (cnt > 0) logger(red(`Failed ${cnt} time(s)`))