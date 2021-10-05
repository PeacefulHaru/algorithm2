// ! October 2021
// https://programmers.co.kr/learn/courses/30/lessons/42747

/**
 * 문제를 잘못 읽은 거 같은 느낌..
 * 
 * 어떤 과학자가 발표한 논문 n편 중, h번 이상 인용된 논문이 
 * h편 이상이고 나머지 논문이 h번 이하 인용되었다면 
 * h의 최댓값이 이 과학자의 H-Index입니다.
 */

const { green, red } = require('chalk')

const solution = (citations) => {
  const arr = citations.sort((a, b) => b - a)
  const leng = arr.length
  
  for (let i = 0; i < leng; i++) {
    const [value, maxCited] = [arr[i], i + 1]
    if (value < maxCited) return maxCited - 1
    if (value === maxCited) return maxCited
  }

  return leng // by default
}

const data = [
  // ! The data below is proved correct, by trusted webpages
  // ? Your ability to understand new concept, and write into code will be very important
  // ? At this stage.
  { input: [3, 0, 6, 1, 5], answer: 3 },
  { input: [0, 0, 0, 0, 0], answer: 0 },
  { input: [0, 0, 0, 0, 1], answer: 1 },
  { input: [9, 9, 9, 12], answer: 4 },
  { input: [9, 7, 6, 2, 1], answer: 3 }, // from Wikipedia
  { input: [10, 8, 5, 4, 3], answer: 4 }, // from Wikipedia
  { input: [25, 8, 5, 3, 3], answer: 3 }, // from Wikipedia
  { input: [1, 1, 5, 7, 6], answer: 3 },
  { input: [0], answer: 0 },
  { input: [0, 0], answer: 0 }
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
