// ! October 2021
// * https://programmers.co.kr/learn/courses/30/lessons/43165

/**
 * FYI: if you define function, you can put anywhere as function is first
 * loaded, if you define object that has function, it will be loaded as order
 * 
 * This is the most liked soltuion for 007-1.js problem
 * I have not studied this solution, yet 
 * git commit might be reprovisioned
 * 
 */
 const { green, red } = require('chalk')
 
 const solution = (numbers, target) => {
  let answer = 0
  
  const getAnswer = (x, value) => {
    if (x < numbers.length){
      getAnswer(x + 1, value + numbers[x]);
      getAnswer(x + 1, value - numbers[x]);
    } 
    else if (value === target) answer++
  }

  getAnswer(0,0)
  return answer
}
 
 const data = [
   { input: [1,1,1,1,1], input2: 3, answer: 5 },
 ]
 
 const logger = data => console.log(data)
 let cnt = 0
 
 data.forEach(el => {
   if (solution(el.input, el.input2) === el.answer) logger(`${el.input}: ${green('OK')}`)
   else {
     logger(`${el.input}: ${red('FAILED')}, got ${solution(el.input)}, should have ${el.answer}`)
     cnt++
   }
 })
 
 const rate = Math.round((data.length - cnt) / data.length * 100)
 if (cnt > 0) logger(red(`Failed ${cnt} time(s) out of ${data.length}: `) + rate + "%")
 else logger(green(`Passed all!`))

