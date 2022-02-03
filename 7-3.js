function solution(board, moves) {
  let answer = 0;
  let stack = [];

  for (let x of moves) {
    x = x - 1;
    for (let y of board) {
      //칸의 값이 0이 아니면(방문하지 않았다면)
      if (y[x]) {
        //스택의 최상단 값과 같지 않으면
        if (y[x] !== stack[stack.length - 1]) {
          stack.push(y[x]);
        } else {
          stack.pop();
          answer += 2; // 2개씩 제거
        }

        // 방문한 칸은 0으로 초기화
        y[x] = 0;
        break;
      }
    }
  }

  return answer;
}

let a = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 3],
  [0, 2, 5, 0, 1],
  [4, 2, 4, 4, 2],
  [3, 5, 1, 3, 1],
];

let b = [1, 5, 3, 5, 1, 2, 1, 4];
console.log(solution(a, b));
