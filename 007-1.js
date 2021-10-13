// ! October 2021
// * https://programmers.co.kr/learn/courses/30/lessons/43165

/**
 * Actually, this took less time then I thought it would...
 * How cool it is!
 * Yet, I am just wondering of the performance issu
 */

 const { green, red } = require('chalk')
 
 const add = (number, prevArr) => {
  const returningArr = []
  
  prevArr.forEach(el => {
    returningArr.push(el + number)
    returningArr.push(el - number)
  })

  return returningArr
 }
 const solution = (numbers, target) => {
  let initialArray = [0]
  for (const number of numbers) {
    initialArray = add(number, initialArray)
  }
  
  return initialArray.filter(el => el === target).length
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