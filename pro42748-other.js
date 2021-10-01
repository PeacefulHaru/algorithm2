// ! Second trial with advice

const solution = (array, commands) => {
    return commands.map(command => {
      const [left, right, at] = command
      const sliced = array.slice(left - 1, right).sort((a, b) => a - b)
      return sliced[at - 1]
    })
  }
  
  // array의 2번째부터 5번째까지 자르면 [5, 2, 6, 3]입니다.
  // 1에서 나온 배열을 정렬하면 [2, 3, 5, 6]입니다.
  // 2에서 나온 배열의 3번째 숫자는 5입니다.
  
  const arr = [1, 5, 2, 6, 3, 7, 4]	
  const command = [[2, 5, 3], [4, 4, 1], [1, 7, 3]]
  // Should return [5, 6, 3]
  
  console.log(solution(arr, command))