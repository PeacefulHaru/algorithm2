// ! October, 2021 (61.5%)
// * https://programmers.co.kr/learn/courses/30/lessons/42842

const { green, red, yellow } = require('chalk')
const { arrayMatch } = require('./lambda')
 
const solution = (brown, yellow) => {
  const [total] = [brown + yellow]
  const longestN = (total - yellow - 2) / 2 // by logic!

  for (let i = longestN; i >= 3; i--) {
    if (total % i !== 0) continue

    const n = (brown + 4) / 2 - total / i

    return [parseInt(n), parseInt(total / n)]
  }

  return "NotFound"
}
 
 const data = [
   { input: 10, input2: 2, answer: [4, 3] },
   { input: 8, input2: 1, answer: [3, 3] },
   { input: 24, input2: 24, answer: [8, 6] },
 ]
 
 const logger = data => console.log(data)
 let cnt = 0
 
 data.forEach(el => {
   const answer = solution(el.input, el.input2)
   if (arrayMatch(answer, el.answer)) logger(`${el.input}, ${el.input2}: ${green('OK')}`)
   else {
     logger(`${el.input} ${el.input2}: ${red('FAILED')}, got ${answer}, should have ${el.answer}`)
     cnt++
   }
 })
 
 const rate = Math.round((data.length - cnt) / data.length * 100)
 if (cnt > 0) logger(red(`Failed ${cnt} time(s) out of ${data.length}: `) + yellow(rate + "%"))
 else logger(green(`Passed all!`))