// ! 100%, First Trial

const solution = (array, commands) => {
  const answer = [];

  commands.forEach(command => {
    const sliced = array.slice(command[0] - 1, command[1]).sort((a, b) => a - b)
    console.log(sliced)
  
    answer.push(sliced[command[2] - 1])
  })

  return answer
}

// array의 2번째부터 5번째까지 자르면 [5, 2, 6, 3]입니다.
// 1에서 나온 배열을 정렬하면 [2, 3, 5, 6]입니다.
// 2에서 나온 배열의 3번째 숫자는 5입니다.

const arr = [1, 5, 2, 6, 3, 7, 4]	
const command = [[2, 5, 3], [4, 4, 1], [1, 7, 3]]
// Should return [5, 6, 3]

console.log(solution(arr, command))