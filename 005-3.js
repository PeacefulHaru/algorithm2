// ! October, 2021
// * https://programmers.co.kr/learn/courses/30/lessons/42842

/**
 * Learned `stringd_data`.repeat(15)
 * This is not supported on Explorer, it seems.
 */

const { green, red, yellow } = require('chalk')
const { print, arrayMatch } = require('./lambda')
 
const solution = (brown, yellow) => {
  const [total] = [brown + yellow]
  const longestN = Math.ceil((brown - 2) / 2) // by logic!

  // ? Because the width has to be at least the length 3
  for (let i = longestN; i >= 3; i--) {
    if (total % i !== 0) continue

    const n = (brown + 4) / 2 - total / i

    return [parseInt(n), parseInt(total / n)]
  }

  return [0, 0] // error?
}

const draw = arr => {
  const inside = `*` + "-".repeat(arr[0] - 2) + "*"
  console.log("*".repeat(arr[0]))
  for (let i =0;i<arr[1] - 2;i++) { console.log(inside) }
  console.log("*".repeat(arr[0]))
}
 
 const data = [
   { input: 10, input2: 2, answer: [4, 3] },
   { input: 8, input2: 1, answer: [3, 3] }, // The smallest, by definition 3 x 3 carpet
   { input: 24, input2: 24, answer: [8, 6] },
   { input: 14, input2: 4, answer: [6, 3] }, // My test A1
   { input: 12, input2: 4, answer: [4, 4] }, // My test A2
   { input: 14, input2: 6, answer: [5, 4] }, // My test B1
   { input: 18, input2: 6, answer: [8, 3] }, // My test B2
   // { input: 5000, input2: 2449, answer: [5002, 3] }, // My test C
   { input: 16, input2: 9, answer: [5, 5] }, // My test C
   { input: 24, input2: 24, answer: [8, 6] }, // Outsoruce D
   { input: 10, input2: 2, answer: [4, 3] }, // Outsoruce D
 ]
 
 let cnt = 0
 
 data.forEach(el => {
   const answer = solution(el.input, el.input2)
   draw(answer)
   if (arrayMatch(answer, el.answer)) print(`${el.input}, ${el.input2}: ${green('OK')}`)
   else {
     print(`${el.input} ${el.input2}: ${red('FAILED')}, got ${answer}, should have ${el.answer}`)
     cnt++
   }
 })
 
 const rate = Math.round((data.length - cnt) / data.length * 100)
 if (cnt > 0) print(red(`Failed ${cnt} time(s) out of ${data.length}: `) + yellow(rate + "%"))
 else print(green(`Passed all!`))