// * 100 out of 100, #6 Trial
// ! Oct 4, 2021 (1 Day)
// https://programmers.co.kr/learn/courses/30/lessons/42746
/**
 * This is indeed great. and you can
 * 1. Convert array into string with join
 * 2. You can do straight multiply from number-string!
 * 3. Sometimes you can just puth eacth other string first, then convert back to integer.
 */

const chalk = require('chalk')

const solution = (numbers) => {
  const answer = numbers
    .map(val => `${val}`)
    .sort((a, b) => (b + a) * 1 - (a + b) * 1)
    .join('')

  return answer[0] === "0" ? "0" : answer
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