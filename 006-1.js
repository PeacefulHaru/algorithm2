// ! October, 2021
// * THis is for the testing Lambda function
/**
 * 
 * Check which method runs faster
 * 
 * RED: Test 1
 * GREEN: Test 2
 * 
 * Test result
 * Even if one function wins, it still has like 1 ~ 2% difference
 * Sometimes, it has 26~35% spike, but that is possible due to computer is 
 * doing other task.
 * 
 * When number is small, it is always the second prime tester (won 100%) 
 * When I test 1 ~ 500: Second always win
 * 1 ~ 5000: Second always win, but then the first's score rise
 * 1 ~ 50000: Second always win, but then the first's score is almost the same
 * 1 ~ 500,000: First one starts winning. Second sometimes win, but first is sometimes faster.
 * 
 * I decided to use the Test 2, because it looks cooler & shorter
 */

const moment = require('moment')
const { red, green } = require('chalk')
const { print } = require('./lambda')

const isPrimeTest1 = (num) => {
  if (num < 2) return false
  else if (num === 2) return true
  else if (num % 2 === 0) return false
  
  const primeCheckingMax = Math.sqrt(num)
  for (let i = 3; i < primeCheckingMax; i++) {
    if (num % i === 0) return false // not prime
  }

  return true // as it has passed tests above
}

const isPrimeTest2 = (num) => {
  if (num < 2) return false
  else if (num === 2) return true
  
  const primeCheckingMax = Math.sqrt(num)
  for (let i = 2; i < primeCheckingMax; i++) {
    if (num % i === 0) return false // not prime
  }

  return true // as it has passed tests above
}

const BEGIN = 1
const TEST_DATA = [500, 5000, 50000, 500000, 1000000]
const TEST_TIME = 15

const tester = (givenFunction, END) => {
  for (let i = BEGIN; i <= END; i++) { givenFunction(i) }
}


let [test1Wins, test2Wins] = [0, 0]
let [test1WinRate, test2WinRate] = [0, 0]
TEST_DATA.forEach(END => {
  for (let i = 0; i < TEST_TIME; i++) {
    // Test 1
    const test1Now = moment().valueOf()
    tester(isPrimeTest1, END)
    const test1End = moment().valueOf()
    const test1Sec = (test1End - test1Now)
  
    // Test 2
    const test2Now = moment().valueOf()
    tester(isPrimeTest2, END)
    const test2End = moment().valueOf()
    const test2Sec = (test2End - test2Now)
  
    test1WinRate += test1Sec
    test2WinRate += test2Sec
    test1Sec < test2Sec ? test1Wins++ : test2Wins++
  }
  
  const minTime = Math.min(test1WinRate, test2WinRate)
  test1WinRate -= minTime
  test2WinRate -= minTime
  print(`1~${END}: ${red(test1Wins)} vs ${green(test2Wins)}`)
  print(`${test1WinRate === 0 ? red(Math.round(test2WinRate)) : green(Math.round(test1WinRate))} micro seconds faster`)
})



